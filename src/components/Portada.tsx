'use client';
import Link from 'next/link';
import { diasEntre, proximas, rango } from '@/shared';
import { useHoy } from './useHoy';
import { TarjetaFiesta } from './TarjetaFiesta';

export function ProximaFiesta({ hoyBuild }: { hoyBuild: string }) {
  const hoy = useHoy(hoyBuild);
  const { f, e } = proximas(hoy)[0];
  const faltan = diasEntre(hoy, e.inicio);
  return (
    <div className="proxima arco">
      <span className="etiqueta">La próxima fiesta</span>
      <h2>{f.nombre}</h2>
      <span>{rango(e.inicio, e.fin)} · {f.provincia}</span>
      {faltan > 0 ? (
        <>
          <span className="cuenta">{faltan}</span>
          <span className="etiqueta">{faltan === 1 ? 'día' : 'días'}</span>
        </>
      ) : (
        <span className="cuenta" style={{ fontSize: 40 }}>¡En fiestas!</span>
      )}
      {e.aproximada ? (
        <span className="aprox">Fecha aproximada a partir de la edición de {e.anyoReferencia}. Pendiente del programa oficial.</span>
      ) : null}
      <Link href={`/fiestas/${f.slug}/`} className="boton">Ver la fiesta</Link>
    </div>
  );
}

export function ListaProximas({ hoyBuild, cuantas = 9 }: { hoyBuild: string; cuantas?: number }) {
  const hoy = useHoy(hoyBuild);
  return (
    <div className="rejilla">
      {proximas(hoy).slice(0, cuantas).map(({ f, e }, i) => (
        <TarjetaFiesta key={f.slug} f={f} e={e} i={i} />
      ))}
    </div>
  );
}
