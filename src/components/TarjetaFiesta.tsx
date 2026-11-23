import Link from 'next/link';
import { diasCorto, mesesCorto, type Edicion, type Fiesta } from '@/shared';

export function TarjetaFiesta({ f, e }: { f: Fiesta; e: Edicion; i?: number }) {
  return (
    <Link href={`/fiestas/${f.slug}/`} className="tarjeta-fiesta almena">
      <span className="fecha">
        <span className="num">{diasCorto(e.inicio, e.fin)}</span>
        <span className="mes">{mesesCorto(e.inicio, e.fin)}</span>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0, flex: 1 }}>
        <span className="nombre">{f.nombre}</span>
        <span className="sub">
          {f.provincia}
          {f.enHonorA ? ` · ${f.enHonorA}` : ''}
          {e.aproximada ? ' · fecha aprox.' : ''}
        </span>
      </span>
      <span className="flecha" aria-hidden="true">›</span>
    </Link>
  );
}
