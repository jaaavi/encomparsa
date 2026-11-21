'use client';
import { useEffect, useState } from 'react';
import { filtroProvincia, porMes } from '@/shared';
import { useHoy } from '@/components/useHoy';
import { TarjetaFiesta } from '@/components/TarjetaFiesta';
import { Rombo } from '@/components/Marca';

const FILTROS = ['Todas', 'Alicante', 'Valencia', 'Murcia', 'Otras'];

export function Calendario({ hoyBuild }: { hoyBuild: string }) {
  const hoy = useHoy(hoyBuild);
  const [p, setP] = useState('Todas');
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('p');
    if (q && FILTROS.includes(q)) setP(q);
  }, []);
  const elegir = (x: string) => {
    setP(x);
    const url = x === 'Todas' ? window.location.pathname : `?p=${encodeURIComponent(x)}`;
    window.history.replaceState(null, '', url);
  };
  const grupos = porMes(hoy, filtroProvincia(p));
  return (
    <>
      <div className="filtros" role="group" aria-label="Filtrar por provincia">
        {FILTROS.map((x) => (
          <button key={x} className="chip" aria-pressed={x === p} onClick={() => elegir(x)}>
            {x}
          </button>
        ))}
      </div>
      {grupos.map((g) => (
        <section key={g.clave}>
          <div className="mes-titulo">
            <Rombo />
            <h2>{g.titulo}</h2>
            <span className="linea" />
          </div>
          <div className="rejilla">
            {g.items.map(({ f, e }, i) => (
              <TarjetaFiesta key={f.slug} f={f} e={e} i={i} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
