import Link from 'next/link';
import { actos, fiestas, hoyIso, PROVINCIAS_PRINCIPALES, rango, proximaEdicion, registro } from '@/shared';
import { Emblema, Rombo } from '@/components/Marca';
import { ListaProximas } from '@/components/Portada';
import { Movil, Tiendas } from '@/components/Tiendas';
import { DIAS_PRUEBA } from '@/lib/config';

const ARCOS = ['var(--gules)', 'var(--azur)', 'var(--sinople)'];

const FUNCIONES = [
  { img: '2-programa', titulo: 'El programa, al minuto', texto: 'Cada acto con su hora y su sitio. Te avisa antes de la Entrada y si hay pólvora ese día.' },
  { img: '8b-comparsas', titulo: 'Las comparsas de cada pueblo', texto: 'Las de los dos bandos, con su escudo. Entra en la tuya o pide acceso desde su ficha.' },
  { img: '3-orden', titulo: 'Tu comparsa en el desfile', texto: 'El orden de la Entrada con tu comparsa marcada, para saber cuándo pasa y dónde ponerte.' },
];

const PASOS = [
  { n: '01', titulo: 'Busca tu pueblo', texto: 'En la app aparecen las comparsas de cada fiesta, por bando.' },
  { n: '02', titulo: 'Pide entrar', texto: 'Si tu comparsa ya está, envía la solicitud. Si no, dala de alta tú.' },
  { n: '03', titulo: 'La directiva te acepta', texto: 'Y ya recibes los comunicados, la agenda y tus cuotas en el móvil.' },
];

export default function Inicio() {
  const hoy = hoyIso();
  const conPrograma = fiestas.filter((f) => f.tienePrograma).sort((a, b) => a.inicio.slice(5).localeCompare(b.inicio.slice(5)));
  const pueblosRegistro = new Set(registro.map((c) => c.fiesta)).size;
  const porProvincia = [...PROVINCIAS_PRINCIPALES, 'Otras'].map((p) => ({
    p,
    n: fiestas.filter((f) => (p === 'Otras' ? !PROVINCIAS_PRINCIPALES.includes(f.provincia) : f.provincia === p)).length,
  }));
  return (
    <>
      <section className="app-hero">
        <div className="contenedor app-hero-in">
          <div className="app-hero-txt">
            <span className="etiqueta">La app de los Moros y Cristianos</span>
            <h1>Tu fiesta y tu comparsa, <em>en el móvil</em>.</h1>
            <p>
              El programa de cada pueblo con la hora de cada acto, el orden de la Entrada con tu comparsa marcada,
              avisos al momento y la gestión de tu comparsa: comunicados, ensayos y cuotas.
            </p>
            <Tiendas />
            <div className="app-hero-cifras">
              <div><b>{fiestas.length}</b><span>fiestas</span></div>
              <div><b>{actos.length}</b><span>actos con horario</span></div>
              <div><b>{registro.length}</b><span>comparsas</span></div>
            </div>
          </div>
          <div className="app-hero-moviles">
            <span className="arco-fondo" aria-hidden="true" />
            <Movil src="/capturas/8-fiesta.webp" alt="Ficha de la fiesta de Orihuela en la app" className="movil-atras" prioridad />
            <Movil src="/capturas/1-inicio.webp" alt="Pantalla de inicio de la app En Comparsa" className="movil-delante" prioridad />
          </div>
        </div>
      </section>
      <div className="partido" aria-hidden="true"><span /><span /></div>

      <div className="contenedor">
        <div className="titulo-seccion">
          <h2>Lo que hace la app</h2>
        </div>
        <div className="funciones">
          {FUNCIONES.map((f) => (
            <article key={f.img} className="funcion">
              <div className="marco"><Movil src={`/capturas/${f.img}.webp`} alt={f.titulo} /></div>
              <h3>{f.titulo}</h3>
              <p>{f.texto}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="banda-gestion">
        <div className="contenedor banda-gestion-in">
          <div className="banda-gestion-txt">
            <span className="etiqueta">Para comparsas y juntas</span>
            <h2>La comparsa, organizada desde la app</h2>
            <ul>
              {[
                'Censo de festeros con cargos y papeles: directiva, tesorería, administración',
                'Solicitudes de acceso que la directiva acepta con un toque',
                'Comunicados que llegan como aviso al móvil de todos',
                'Ensayos, cenas y reuniones con confirmación de asistencia',
                'Cuotas: quién ha pagado y quién no, sin hojas de cálculo',
                'La junta verificada edita el programa oficial y avisa de cambios',
              ].map((t) => (
                <li key={t}><Rombo color="#F6D79A" /> {t}</li>
              ))}
            </ul>
            <div className="hero-acciones">
              <Link href="/planes/" className="boton">Ver planes</Link>
              <span className="banda-gestion-nota">{DIAS_PRUEBA} días de prueba gratis, sin tarjeta</span>
            </div>
          </div>
          <div className="banda-gestion-moviles">
            <Movil src="/capturas/4-comparsa.webp" alt="Panel de una comparsa en la app" />
            <Movil src="/capturas/5-miembros.webp" alt="Solicitudes de acceso y censo" />
            <Movil src="/capturas/10-agenda.webp" alt="Agenda de ensayos con asistencia" />
          </div>
        </div>
      </section>

      <div className="contenedor">
        <div className="titulo-seccion">
          <h2>Entra en tu comparsa</h2>
        </div>
        <p className="muted" style={{ maxWidth: 720, marginBottom: 20, marginTop: -8 }}>
          Ya tenemos {registro.length} comparsas de {pueblosRegistro} pueblos, de los dos bandos. Si la tuya no está, la das de alta en un minuto.
        </p>
        <ol className="pasos">
          {PASOS.map((p) => (
            <li key={p.n} className="paso">
              <span className="paso-n">{p.n}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>

        <div className="titulo-seccion" id="fiestas">
          <h2>Próximas fiestas</h2>
          <Link href="/calendario/" style={{ fontWeight: 600, textDecoration: 'none' }}>Todo el año ›</Link>
        </div>
        <ListaProximas hoyBuild={hoy} />

        <div className="titulo-seccion">
          <h2>Con programa completo</h2>
        </div>
        <div className="destacadas">
          {conPrograma.map((f, i) => {
            const e = proximaEdicion(f, hoy);
            return (
              <Link key={f.slug} href={`/fiestas/${f.slug}/`} className="destacada" style={{ background: ARCOS[i % 3] }}>
                <Emblema size={64} variante="gules" id={`dest-${f.slug}`} />
                <span className="etiqueta">{f.enHonorA}</span>
                <h3>{f.nombre}</h3>
                <span>{rango(f.inicio, f.fin)} {f.inicio.slice(0, 4)}</span>
                <span style={{ fontSize: 14, opacity: 0.85 }}>
                  {actos.filter((a) => a.fiesta === f.slug).length} actos
                  {e.aproximada ? ' · próxima edición por confirmar' : ''}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="titulo-seccion">
          <h2>Explora por provincia</h2>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {porProvincia.map(({ p, n }) => (
            <Link key={p} href={`/calendario/?p=${encodeURIComponent(p)}`} className="chip">
              {p} · {n}
            </Link>
          ))}
        </div>

        <section className="banda-app" id="app">
          <Emblema size={96} variante="oscuro" id="banda" />
          <div>
            <h2>Llévate la fiesta en el bolsillo</h2>
            <p>Gratis. Sin anuncios. Con avisos antes de cada acto que sigas.</p>
          </div>
          <Tiendas />
        </section>
      </div>
    </>
  );
}
