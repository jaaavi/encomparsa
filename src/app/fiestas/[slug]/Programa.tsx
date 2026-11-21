'use client';
import { useEffect, useState } from 'react';
import { diaMes, diaSemanaCorto, ETIQUETA_POLVORA, fechaLarga, hoyIso, mayuscula, type Acto } from '@/shared';

const PRINCIPALES = ['Entrada', 'Embajada'];

export function Programa({ actos, dias }: { actos: Acto[]; dias: string[] }) {
  const [dia, setDia] = useState(dias[0]);
  useEffect(() => {
    const h = hoyIso();
    if (dias.includes(h)) setDia(h);
  }, [dias]);
  const delDia = actos.filter((a) => a.fecha === dia);
  const conPolvora = delDia.filter((a) => a.polvora === 'si').length;
  return (
    <div>
      <div className="dias" role="tablist" aria-label="Días de fiesta">
        {dias.map((x) => (
          <button key={x} role="tab" className="dia" aria-selected={x === dia} onClick={() => setDia(x)}>
            <span className="ds">{diaSemanaCorto(x)}</span>
            <span className="dn">{diaMes(x)}</span>
          </button>
        ))}
      </div>
      <h3 className="dia-titulo">{mayuscula(fechaLarga(dia))}</h3>
      {conPolvora ? (
        <div className="aviso" style={{ marginBottom: 12 }}>
          <span aria-hidden="true">✦</span>
          <span>Este día hay pólvora en {conPolvora === 1 ? 'un acto' : `${conPolvora} actos`}. Si vas con niños o con perro, tenlo en cuenta.</span>
        </div>
      ) : null}
      <ol className="actos" role="tabpanel">
        {delDia.map((a) => (
          <li key={a.id} className={`acto${PRINCIPALES.includes(a.tipo) ? ' acto-principal' : ''}`}>
            <span className={`hora${a.hora ? '' : ' sin'}`}>{a.hora ? a.hora.slice(0, 5) : 'Hora por confirmar'}</span>
            <div>
              <h3>{a.nombre}</h3>
              <div className="meta">
                <span className="tag tag-oro">{a.tipo}</span>
                {a.polvora === 'si' ? <span className="tag tag-polvora">{ETIQUETA_POLVORA.si}</span> : null}
                {a.anyo !== Number(dia.slice(0, 4)) ? <span className="tag tag-cristiano">Dato de {a.anyo}</span> : null}
              </div>
              {a.lugar ? <p className="linea-dato"><b>Dónde:</b> {a.lugar}</p> : null}
              {a.recorrido ? <p className="linea-dato"><b>Recorrido:</b> {a.recorrido}</p> : null}
              {a.nota ? <p className="nota">{a.nota}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
