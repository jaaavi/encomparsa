import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  comparsasDe, programaDe, webCorta, desfilesDe, fiesta, fiestas, fuentesDe, hoyIso, proximaEdicion, rango,
} from '@/shared';
import { Emblema } from '@/components/Marca';
import { ProgramaVivo } from './ProgramaVivo';
import { reelDe } from '@/lib/reels';
import { CarruselReels } from '@/components/Reels';

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
  const comparsas = comparsasDe(f.slug);
  const desfiles = desfilesDe(f.slug);
  const fuentes = fuentesDe(f.slug);
  const anyo = f.inicio.slice(0, 4);
  return (
    <>
      <section className="ficha-cab">
        <div className="ficha-cab-in">
          <div className="ficha-cab-txt">
            <span className="etiqueta">{rango(e.inicio, e.fin)} {e.inicio.slice(0, 4)}{e.aproximada ? ' (previsto)' : ''} · {f.provincia}</span>
            <h1>{f.nombre}</h1>
            <div className="tags">
              {f.enHonorA ? <span className="tag tag-oro">En honor a {f.enHonorA}</span> : null}
              {f.declaracion ? <span className="tag tag-oro">Interés Turístico {f.declaracion}</span> : null}
            </div>
            {e.aproximada ? (
              <span className="ficha-aprox">
                Fechas calculadas a partir de la edición de {anyo} ({rango(f.inicio, f.fin)}), pendientes de confirmar con el programa oficial.
              </span>
            ) : null}
          </div>
          <div className="arco-partido" aria-hidden="true">
            <Emblema size={120} variante="oscuro" id={`ficha-${f.slug}`} />
          </div>
        </div>
        <div className="partido" aria-hidden="true"><span /><span /></div>
      </section>

      <div className="contenedor" style={{ marginTop: 36 }}>
        <div className="ficha-cuerpo">
          <div>
            <ProgramaVivo slug={f.slug} inicial={programaDe(f.slug, hoyIso())} nombre={f.nombre} web={f.web} />

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
            {reelDe(f.slug) ? (
              <div className="filete reel-lateral">
                <h2>La historia, en vídeo</h2>
                <CarruselReels reels={[reelDe(f.slug)!]} />
              </div>
            ) : null}
            <div className="filete">
              <h2>La fiesta</h2>
              <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['Organiza', f.organizador],
                  ['En honor a', f.enHonorA],
                  ['Fechas', `${rango(e.inicio, e.fin)} ${e.inicio.slice(0, 4)}${e.aproximada ? ' (previsto)' : ''}`],
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
                    <dd><a href={webUrl(f.web)} target="_blank" rel="noopener noreferrer">{webCorta(f.web)}</a></dd>
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
