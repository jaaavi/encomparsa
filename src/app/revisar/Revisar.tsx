'use client';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { proximas, TIPOS_ACTO, webCorta } from '@/shared';
import { ConCuenta } from '@/components/Cuenta';
import { fb, mensajeError } from '@/lib/firebase';

interface ActoP { fecha: string; hora: string | null; nombre: string; tipo: string; lugar: string | null; recorrido: string | null; polvora: 'si' | 'no' | 'desconocido'; nota: string | null }
interface Propuesta {
  id: string; fiesta: string; nombreFiesta: string; anyoBuscado: number; anyo: number | null; estado: string; origen: string;
  confianza?: string; oficial?: boolean; resumen?: string; fuentes?: { titulo: string; url: string }[]; actos?: ActoP[];
  error?: string; uso?: { busquedas: number; lecturas: number; entrada: number; salida: number }; creadaEn?: { toDate: () => Date };
}
const ESTADOS: Record<string, string> = { pendiente: 'Pendiente', buscando: 'Buscando…', aprobada: 'Aprobada', rechazada: 'Rechazada', sin_resultado: 'Sin resultado', error: 'Error' };
// Precio orientativo: Sonnet ~3 $/M de entrada y 15 $/M de salida, búsqueda 0,01 $.
const coste = (u?: Propuesta['uso']) => (u ? (u.entrada * 3 + u.salida * 15) / 1e6 + u.busquedas * 0.01 : 0);

function Editor({ p, alTerminar }: { p: Propuesta; alTerminar: (m: string) => void }) {
  const [actos, setActos] = useState<ActoP[]>(p.actos ?? []);
  const [avisar, setAvisar] = useState(true);
  const [ocupado, setOcupado] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cambiar = (i: number, k: keyof ActoP, v: string) =>
    setActos((xs) => xs.map((a, j) => (j === i ? { ...a, [k]: v === '' && k !== 'nombre' && k !== 'fecha' ? null : v } : a)));
  const accion = async (accion: 'aprobar' | 'rechazar') => {
    setOcupado(true); setError(null);
    try {
      const r = await fb().llamar<{ actos?: number; avisados?: number }>('revisarPropuesta', { id: p.id, accion, actos, avisar });
      alTerminar(accion === 'aprobar' ? `Publicado: ${r.actos} actos de ${p.nombreFiesta}${r.avisados ? ` · ${r.avisados} avisos enviados` : ''}.` : `Rechazada la propuesta de ${p.nombreFiesta}.`);
    } catch (e) { setError(mensajeError(e)); setOcupado(false); }
  };
  return (
    <div className="revision-editor">
      <div className="tabla-actos" role="table" aria-label={`Actos propuestos para ${p.nombreFiesta}`}>
        <div className="fila-acto cab" role="row">
          <span>Día</span><span>Hora</span><span>Acto</span><span>Tipo</span><span>Lugar</span><span>Pólvora</span><span />
        </div>
        {actos.map((a, i) => (
          <div className="fila-acto" role="row" key={i}>
            <input aria-label="Día" type="date" value={a.fecha} onChange={(e) => cambiar(i, 'fecha', e.target.value)} />
            <input aria-label="Hora" type="time" value={a.hora ?? ''} onChange={(e) => cambiar(i, 'hora', e.target.value)} />
            <input aria-label="Acto" value={a.nombre} onChange={(e) => cambiar(i, 'nombre', e.target.value)} />
            <select aria-label="Tipo" value={a.tipo} onChange={(e) => cambiar(i, 'tipo', e.target.value)}>
              {TIPOS_ACTO.map((t) => <option key={t}>{t}</option>)}
            </select>
            <input aria-label="Lugar" value={a.lugar ?? ''} onChange={(e) => cambiar(i, 'lugar', e.target.value)} />
            <select aria-label="Pólvora" value={a.polvora} onChange={(e) => cambiar(i, 'polvora', e.target.value)}>
              <option value="desconocido">¿?</option><option value="si">Sí</option><option value="no">No</option>
            </select>
            <button type="button" className="quitar" aria-label={`Quitar ${a.nombre}`} onClick={() => setActos((xs) => xs.filter((_, j) => j !== i))}>×</button>
          </div>
        ))}
      </div>
      <button type="button" className="enlace-boton" onClick={() => setActos((xs) => [...xs, { fecha: xs.at(-1)?.fecha ?? '', hora: null, nombre: '', tipo: 'Otro', lugar: null, recorrido: null, polvora: 'desconocido', nota: null }])}>
        + Añadir acto
      </button>
      <label className="check"><input type="checkbox" checked={avisar} onChange={(e) => setAvisar(e.target.checked)} /> Avisar a quien sigue la fiesta («Ya está el programa»)</label>
      {error ? <p className="aviso" role="alert">{error}</p> : null}
      <div className="hero-acciones">
        <button className="boton" disabled={ocupado || !actos.length || actos.some((a) => !a.fecha || !a.nombre.trim())} onClick={() => accion('aprobar')}>
          {ocupado ? 'Publicando…' : `Aprobar y publicar ${actos.length} actos`}
        </button>
        <button className="boton boton-sec" disabled={ocupado} onClick={() => accion('rechazar')}>Rechazar</button>
      </div>
    </div>
  );
}

function Cola({ u, salir }: { u: User; salir: () => void }) {
  const [esAdmin, setEsAdmin] = useState<boolean | null>(null);
  const [lista, setLista] = useState<Propuesta[] | null>(null);
  const [verTodas, setVerTodas] = useState(false);
  const [abierta, setAbierta] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const opciones = useMemo(() => proximas().map(({ f, e }) => ({ slug: f.slug, texto: `${f.nombre} · ${e.inicio}`, anyo: Number(e.inicio.slice(0, 4)) })), []);
  const [fiesta, setFiesta] = useState(opciones[0]?.slug ?? '');
  const [anyo, setAnyo] = useState(opciones[0]?.anyo ?? new Date().getFullYear());
  const [buscando, setBuscando] = useState(false);

  const cargar = useCallback(async () => {
    try {
      const s = await getDocs(query(collection(fb().db, 'propuestas'), orderBy('creadaEn', 'desc'), limit(60)));
      setLista(s.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Propuesta, 'id'>) })));
    } catch (e) { setError(mensajeError(e)); setLista([]); }
  }, []);
  useEffect(() => { u.getIdTokenResult(true).then((t) => setEsAdmin(t.claims.admin === true)).catch(() => setEsAdmin(false)); }, [u]);
  useEffect(() => { if (esAdmin) cargar(); }, [esAdmin, cargar]);

  const buscar = async () => {
    setBuscando(true); setError(null); setAviso(null);
    try {
      const r = await fb().llamar<{ encontrado: boolean; actos: number }>('buscarPrograma', { fiesta, anyo });
      setAviso(r.encontrado ? `Encontrado: ${r.actos} actos. Revísalo abajo.` : 'No ha encontrado un programa con horarios. Mira el resumen para ver dónde ha buscado.');
      await cargar();
    } catch (e) { setError(mensajeError(e)); }
    setBuscando(false);
  };

  if (esAdmin === null) return <p className="muted">Comprobando permisos…</p>;
  if (!esAdmin) {
    return (
      <div className="filete vacio">
        <h2>Solo para la administración</h2>
        <p className="muted">Esta cuenta ({u.email}) no tiene permisos de administración. Dátelos con «node admin.mjs superadmin tu@correo» y vuelve a entrar.</p>
        <button className="boton boton-sec" onClick={salir}>Salir</button>
      </div>
    );
  }
  const visibles = (lista ?? []).filter((p) => verTodas || p.estado === 'pendiente' || p.estado === 'buscando');
  return (
    <div className="revisar">
      <section className="filete formulario">
        <h2>Buscar un programa</h2>
        <div className="buscar-fila">
          <label>Fiesta
            <select value={fiesta} onChange={(e) => { setFiesta(e.target.value); setAnyo(opciones.find((o) => o.slug === e.target.value)?.anyo ?? anyo); }}>
              {opciones.map((o) => <option key={o.slug} value={o.slug}>{o.texto}</option>)}
            </select>
          </label>
          <label>Año<input type="number" value={anyo} min={2015} max={2035} onChange={(e) => setAnyo(Number(e.target.value))} /></label>
          <button className="boton" disabled={buscando} onClick={buscar}>{buscando ? 'Buscando… (1-3 min)' : 'Buscar con IA'}</button>
        </div>
        <p className="muted" style={{ fontSize: 14 }}>Cada lunes se buscan solas las fiestas de los próximos 75 días que aún no tienen el programa aprobado. Cada búsqueda cuesta unos céntimos.</p>
      </section>

      {aviso ? <p className="exito" role="status">{aviso}</p> : null}
      {error ? <p className="aviso" role="alert">{error}</p> : null}

      <div className="hero-acciones" style={{ justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: 28 }}>{verTodas ? 'Todas las propuestas' : 'Pendientes de revisar'}</h2>
        <button className="enlace-boton" onClick={() => setVerTodas((v) => !v)}>{verTodas ? 'Ver solo pendientes' : 'Ver todas'}</button>
      </div>
      {lista === null ? <p className="muted">Cargando…</p> : visibles.length === 0 ? <p className="muted">No hay nada pendiente.</p> : visibles.map((p) => (
        <article key={p.id} className="filete propuesta">
          <div className="propuesta-cab">
            <div>
              <span className="etiqueta">{ESTADOS[p.estado] ?? p.estado} · {p.origen === 'semanal' ? 'búsqueda semanal' : 'búsqueda manual'}</span>
              <h3>{p.nombreFiesta} {p.anyo ?? p.anyoBuscado}</h3>
            </div>
            <div className="tags">
              {p.confianza ? <span className={`tag ${p.confianza === 'alta' ? 'tag-moro' : p.confianza === 'media' ? 'tag-oro' : 'tag-polvora'}`}>Confianza {p.confianza}</span> : null}
              {p.oficial ? <span className="tag tag-cristiano">Fuente oficial</span> : null}
              {p.anyo && p.anyo !== p.anyoBuscado ? <span className="tag tag-polvora">Es de {p.anyo}, no de {p.anyoBuscado}</span> : null}
            </div>
          </div>
          {p.resumen ? <p>{p.resumen}</p> : null}
          {p.error ? <p className="aviso">{p.error}</p> : null}
          {p.fuentes?.length ? (
            <ul className="fuentes">{p.fuentes.map((x) => <li key={x.url}><a href={x.url} target="_blank" rel="noopener noreferrer">{x.titulo}</a> <span className="muted">({webCorta(x.url).split('/')[0]})</span></li>)}</ul>
          ) : null}
          <p className="muted" style={{ fontSize: 13 }}>
            {p.actos?.length ?? 0} actos · {p.uso ? `${p.uso.busquedas} búsquedas, ${p.uso.lecturas} lecturas, ~${coste(p.uso).toFixed(2)} $` : ''}
            {p.creadaEn ? ` · ${p.creadaEn.toDate().toLocaleString('es-ES')}` : ''}
          </p>
          {p.estado === 'pendiente' ? (
            abierta === p.id
              ? <Editor p={p} alTerminar={(m) => { setAviso(m); setAbierta(null); cargar(); }} />
              : <button className="boton" onClick={() => setAbierta(p.id)}>Revisar {p.actos?.length ?? 0} actos</button>
          ) : null}
        </article>
      ))}
      <p className="muted"><button className="enlace-boton" onClick={salir}>Salir</button></p>
    </div>
  );
}

export function Revisar() {
  return <ConCuenta titulo="Entra con tu cuenta de administración">{(u, salir) => <Cola u={u} salir={salir} />}</ConCuenta>;
}
