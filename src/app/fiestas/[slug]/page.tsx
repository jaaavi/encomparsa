import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  actosDe, comparsasDe, desfilesDe, diasDe, fiesta, fiestas, fuentesDe, hoyIso, proximaEdicion, rango,
} from '@/shared';
import { Estrella } from '@/components/Marca';
import { Programa } from './Programa';

export const dynamicParams = false;
export function generateStaticParams() {
  return fiestas.map((f) => ({ slug: f.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const f = fiesta((await params).slug);
  return f
    ? { title: `Moros y Cristianos de ${f.nombre}`, description: `Programa, horarios y comparsas de las fiestas de ${f.nombre} en honor a ${f.enHonorA}.` }
    : {};
}

const webUrl = (w: string) => (w.includes('@') ? `mailto:${w}` : w.startsWith('http') ? w : `https://${w}`);

export default async function PaginaFiesta({ params }: { params: Promise<{ slug: string }> }) {
  const f = fiesta((await params).slug);
  if (!f) notFound();
  const e = proximaEdicion(f, hoyIso());
  const actos = actosDe(f.slug);
  const comparsas = comparsasDe(f.slug);
  const desfiles = desfilesDe(f.slug);
  const fuentes = fuentesDe(f.slug);
  const anyo = f.inicio.slice(0, 4);
  return (
    <>
      <section className="ficha-cab">
        <div className="ficha-cab-in">
          <Estrella size={48} fondo="#8E1B23" />
          <span className="etiqueta">Moros y Cristianos · {f.provincia}</span>
          <h1>{f.nombre}</h1>
          <span className="fechas">
            {rango(f.inicio, f.fin)} {anyo}
          </span>
          <div className="tags">
            {f.enHonorA ? <span className="tag tag-oro">En honor a {f.enHonorA}</span> : null}
            {f.declaracion ? <span className="tag tag-oro">Interés Turístico {f.declaracion}</span> : null}
          </div>
          {e.aproximada ? (
            <span style={{ fontSize: 15, color: '#E9D6B5', maxWidth: 560 }}>
              Datos de la edición de {anyo}. La próxima sería hacia el {rango(e.inicio, e.fin)} de {e.inicio.slice(0, 4)}, pendiente del programa oficial.
            </span>
          ) : null}
        </div>
      </section>

      <div className="contenedor" style={{ marginTop: 36 }}>
        <div className="ficha-cuerpo">
          <div>
            {actos.length ? (
              <>
                <div className="titulo-seccion" style={{ marginTop: 0 }}>
                  <h2>Programa {anyo}</h2>
                  <span className="linea" />
                </div>
                <Programa actos={actos} dias={diasDe(f.slug)} />
              </>
            ) : (
              <div className="filete vacio">
                <Estrella size={40} />
                <h2>Programa pendiente</h2>
                <p className="muted">
                  Aún no tenemos los horarios de {f.nombre}. Los añadiremos en cuanto la organización publique el programa.
                </p>
                {f.web ? (
                  <a className="boton boton-sec" href={webUrl(f.web)} target="_blank" rel="noopener noreferrer">
                    Web de la organización
                  </a>
                ) : null}
              </div>
            )}

            {comparsas.length ? (
              <>
                <div className="titulo-seccion">
                  <h2>Las comparsas</h2>
                  <span className="linea" />
                </div>
                <div className="bandos">
                  {(['cristiano', 'moro'] as const).map((b) => (
                    <div className="bando" key={b}>
                      <div className="bando-cab" style={{ background: b === 'moro' ? 'var(--verde)' : 'var(--lapis)' }}>
                        BANDO {b === 'moro' ? 'MORO' : 'CRISTIANO'}
                      </div>
                      <ul>
                        {comparsas.filter((c) => c.bando === b).map((c) => (
                          <li key={c.nombre}>{c.nombre}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {desfiles.map((d) => (
                  <div className="desfile" key={d.nombre}>
                    <h3>{d.comparsas[0].orden ? `Orden de desfile · ${d.nombre}` : d.nombre}</h3>
                    {d.nota ? <p className="muted" style={{ fontSize: 15 }}>{d.nota}</p> : null}
                    {d.comparsas[0].orden ? (
                      <ol className="orden-lista">
                        {d.comparsas.map((c) => (
                          <li key={c.comparsa + c.orden}>
                            <span className="n" style={{ background: c.bando === 'moro' ? 'var(--verde)' : 'var(--lapis)' }}>{c.orden}</span>
                            <span style={{ display: 'flex', flexDirection: 'column' }}>
                              <span className="c">{c.comparsa}</span>
                              {c.cargo ? <span className="cargo">{c.cargo}</span> : null}
                            </span>
                          </li>
                        ))}
                      </ol>
                    ) : null}
                  </div>
                ))}
              </>
            ) : null}
          </div>

          <aside className="lateral">
            <div className="filete">
              <h2>La fiesta</h2>
              <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['Organiza', f.organizador],
                  ['En honor a', f.enHonorA],
                  ['Fechas', `${rango(f.inicio, f.fin)} ${anyo}`],
                  ['Declaración turística', f.declaracion],
                ].filter(([, v]) => v).map(([k, v]) => (
                  <div className="dato" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
                {f.web ? (
                  <div className="dato">
                    <dt>Web o contacto</dt>
                    <dd><a href={webUrl(f.web)} target="_blank" rel="noopener noreferrer">{f.web}</a></dd>
                  </div>
                ) : null}
              </dl>
              {f.notas ? <p className="muted" style={{ fontSize: 14 }}>{f.notas}</p> : null}
            </div>
            <div className="filete">
              <h2>Fuentes</h2>
              {fuentes.length ? (
                <ul className="fuentes">
                  {fuentes.map((s) => (
                    <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.titulo}</a></li>
                  ))}
                </ul>
              ) : (
                <p className="muted" style={{ fontSize: 15 }}>{f.fuente}</p>
              )}
              <p className="muted" style={{ fontSize: 13 }}>Los horarios pueden cambiar. Comprueba el programa oficial.</p>
            </div>
            <Link href="/calendario/" className="boton boton-sec">Volver al calendario</Link>
          </aside>
        </div>
      </div>
    </>
  );
}
