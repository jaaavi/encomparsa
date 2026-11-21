import Link from 'next/link';
import { diasCorto, mesesCorto, type Edicion, type Fiesta } from '@/shared';

export function TarjetaFiesta({ f, e, i = 0 }: { f: Fiesta; e: Edicion; i?: number }) {
  return (
    <Link href={`/fiestas/${f.slug}/`} className="tarjeta-fiesta">
      <span className="escudo" style={{ width: 60, height: 64, background: i % 2 ? 'var(--lapis)' : 'var(--carmesi)' }}>
        <span className="num">{diasCorto(e.inicio, e.fin)}</span>
        <span className="mes">{mesesCorto(e.inicio, e.fin)}</span>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0, flex: 1 }}>
        <span className="nombre">{f.nombre}</span>
        <span className="sub">
          {f.provincia}
          {e.aproximada ? ' · fecha aproximada' : ''}
        </span>
        {f.declaracion ? (
          <span><span className="tag tag-oro">Interés {f.declaracion.replace(/\s*\(.*\)/, '')}</span></span>
        ) : null}
      </span>
    </Link>
  );
}
