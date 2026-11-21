import Link from 'next/link';
import { actos, fiestas, hoyIso, PROVINCIAS_PRINCIPALES, rango, proximaEdicion } from '@/shared';
import { Estrella, Rombo } from '@/components/Marca';
import { ListaProximas, ProximaFiesta } from '@/components/Portada';

const COLORES = ['var(--carmesi)', 'var(--lapis)', 'var(--verde)'];

export default function Inicio() {
  const hoy = hoyIso();
  const conPrograma = fiestas.filter((f) => f.tienePrograma).sort((a, b) => a.inicio.slice(5).localeCompare(b.inicio.slice(5)));
  const porProvincia = [...PROVINCIAS_PRINCIPALES, 'Otras'].map((p) => ({
    p,
    n: fiestas.filter((f) => (p === 'Otras' ? !PROVINCIAS_PRINCIPALES.includes(f.provincia) : f.provincia === p)).length,
  }));
  return (
    <div className="contenedor">
      <section className="hero">
        <div className="hero-txt">
          <span className="etiqueta">Moros y Cristianos · pueblo a pueblo</span>
          <h1>
            Todas las fiestas, <em>en comparsa</em>.
          </h1>
          <p>
            El calendario de las fiestas de Moros y Cristianos, con el programa de cada pueblo, la hora de cada acto,
            dónde ver la Entrada y el orden en que desfilan las comparsas.
          </p>
          <div className="hero-acciones">
            <Link href="/calendario/" className="boton">Ver el calendario</Link>
            <Link href="#app" className="boton boton-sec">La app</Link>
          </div>
          <p className="muted" style={{ fontSize: 15 }}>
            {fiestas.length} fiestas en el calendario · {actos.length} actos con horario en {conPrograma.length} pueblos
          </p>
        </div>
        <ProximaFiesta hoyBuild={hoy} />
      </section>

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
          <span className="etiqueta" style={{ color: 'var(--oro-claro)' }}>La app</span>
          <h2>Tu fiesta, en el bolsillo</h2>
          <ul>
            {[
              'Sigue tus fiestas y recibe un aviso antes de cada acto',
              'Marca tu comparsa y sabe cuándo pasa en la Entrada',
              'Aviso de pólvora del día, si vas con niños o con perro',
              'Cambios de hora o de recorrido, al momento',
              'Comunicados, agenda y cuotas de tu comparsa',
            ].map((t) => (
              <li key={t}>
                <Rombo /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="tiendas">
          <Link href="/app/" className="boton">Descargar la app</Link>
          <Link href="/planes/" className="boton boton-sec" style={{ color: 'var(--oro-claro)' }}>¿Llevas una comparsa?</Link>
          <small>Gratis en iOS y Android</small>
        </div>
      </section>
    </div>
  );
}
