import Link from 'next/link';
import { actos, fiestas, hoyIso, PROVINCIAS_PRINCIPALES, rango, proximaEdicion, registro } from '@/shared';
import { Estrella, Rombo } from '@/components/Marca';
import { ListaProximas } from '@/components/Portada';
import { Movil, Tiendas } from '@/components/Tiendas';
import { DIAS_PRUEBA } from '@/lib/config';

const COLORES = ['var(--carmesi)', 'var(--lapis)', 'var(--verde)'];

const FUNCIONES = [
  { img: '2-programa', titulo: 'El programa, al minuto', texto: 'Cada acto con su hora y su sitio. Te avisa antes de la Entrada y si hay pólvora ese día.' },
  { img: '3-orden', titulo: 'Tu comparsa en el desfile', texto: 'El orden de la Entrada con tu comparsa marcada, para saber cuándo pasa y dónde ponerte.' },
  { img: '7-calendario', titulo: 'Todo el año festero', texto: 'Las fiestas de cada pueblo mes a mes. Sigue las tuyas y no te pierdas ninguna.' },
];

const PASOS = [
  { n: 1, titulo: 'Busca tu pueblo', texto: 'En la app aparecen las comparsas de cada fiesta, por bando.' },
  { n: 2, titulo: 'Pide entrar', texto: 'Si tu comparsa ya está, envía la solicitud. Si no, dala de alta tú.' },
  { n: 3, titulo: 'La junta te acepta', texto: 'Y ya recibes los comunicados, la agenda y tus cuotas en el móvil.' },
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
              avisos de cambios al momento y la gestión de tu comparsa: comunicados, ensayos y cuotas.
            </p>
            <Tiendas />
            <p className="app-hero-nota">
              Gratis · {fiestas.length} fiestas · {actos.length} actos con horario · {registro.length} comparsas
            </p>
          </div>
          <div className="app-hero-moviles" aria-hidden="true">
            <Movil src="/capturas/2-programa.webp" alt="" className="movil-atras" />
            <Movil src="/capturas/1-inicio.webp" alt="Pantalla de inicio de la app En Comparsa" className="movil-delante" />
          </div>
        </div>
      </section>

      <div className="contenedor">
        <div className="titulo-seccion">
          <Estrella size={28} />
          <h2>Lo que hace la app</h2>
          <span className="linea" />
        </div>
        <div className="funciones">
          {FUNCIONES.map((f) => (
            <article key={f.img} className="funcion">
              <Movil src={`/capturas/${f.img}.webp`} alt={f.titulo} />
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
                'Censo de festeros con cargos y papeles: junta, tesorería, administración',
                'Comunicados que llegan como aviso al móvil de todos',
                'Ensayos, cenas y reuniones con confirmación de asistencia',
                'Cuotas: quién ha pagado y quién no, sin hojas de cálculo',
                'La junta verificada edita el programa oficial y avisa de cambios',
              ].map((t) => (
                <li key={t}><Rombo /> {t}</li>
              ))}
            </ul>
            <div className="hero-acciones">
              <Link href="/planes/" className="boton">Ver planes</Link>
              <span className="banda-gestion-nota">{DIAS_PRUEBA} días de prueba gratis, sin tarjeta</span>
            </div>
          </div>
          <div className="banda-gestion-moviles" aria-hidden="true">
            <Movil src="/capturas/4-comparsa.webp" alt="" />
            <Movil src="/capturas/5-agenda.webp" alt="" />
            <Movil src="/capturas/6-cuotas.webp" alt="" />
          </div>
        </div>
      </section>

      <div className="contenedor">
        <div className="titulo-seccion">
          <Estrella size={28} />
          <h2>Entra en tu comparsa</h2>
          <span className="linea" />
        </div>
        <p className="muted" style={{ maxWidth: 720, marginBottom: 18 }}>
          Ya tenemos {registro.length} comparsas de {pueblosRegistro} pueblos, de los dos bandos. Si la tuya no está, la das de alta en un minuto.
        </p>
        <ol className="pasos">
          {PASOS.map((p) => (
            <li key={p.n} className="paso filete">
              <span className="paso-n">{p.n}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>

        <div className="titulo-seccion" id="fiestas">
          <Estrella size={28} />
          <h2>Próximas fiestas</h2>
          <span className="linea" />
          <Link href="/calendario/" className="etiqueta" style={{ textDecoration: 'none' }}>Todo el año</Link>
        </div>
        <ListaProximas hoyBuild={hoy} />

        <div className="titulo-seccion">
          <Estrella size={28} />
          <h2>Con programa completo</h2>
          <span className="linea" />
        </div>
        <div className="destacadas">
          {conPrograma.map((f, i) => {
            const e = proximaEdicion(f, hoy);
            return (
              <Link key={f.slug} href={`/fiestas/${f.slug}/`} className="destacada arco" style={{ background: COLORES[i % 3] }}>
                <Estrella size={44} fondo="transparent" />
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
          <Estrella size={28} />
          <h2>Explora por provincia</h2>
          <span className="linea" />
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {porProvincia.map(({ p, n }) => (
            <Link key={p} href={`/calendario/?p=${encodeURIComponent(p)}`} className="chip">
              {p} · {n}
            </Link>
          ))}
        </div>

        <section className="banda-app" id="app">
          <div>
            <span className="etiqueta" style={{ color: 'var(--oro-claro)' }}>Descárgala</span>
            <h2>Llévate la fiesta en el bolsillo</h2>
            <p style={{ color: '#E9DDC4', marginTop: 10 }}>Gratis. Sin anuncios. Con avisos antes de cada acto que sigas.</p>
          </div>
          <Tiendas oscuro />
        </section>
      </div>
    </>
  );
}
