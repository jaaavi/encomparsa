import type { Metadata } from 'next';
import { hoyIso } from '@/shared';
import { Calendario } from './Calendario';

export const metadata: Metadata = { title: 'Calendario festero' };

export default function PaginaCalendario() {
  return (
    <div className="contenedor">
      <div className="cab-pagina">
        <span className="etiqueta">Todo el año</span>
        <h1>Calendario festero</h1>
        <p>
          Las fiestas de Moros y Cristianos ordenadas por su próxima edición. Cuando aún no hay programa del año que viene,
          mostramos la fecha aproximada a partir de la última edición.
        </p>
      </div>
      <Calendario hoyBuild={hoyIso()} />
    </div>
  );
}
