import type { Metadata } from 'next';
import { BorrarCuenta } from './BorrarCuenta';
import { CONTACTO } from '@/lib/config';

export const metadata: Metadata = { title: 'Eliminar tu cuenta' };

export default function EliminarCuenta() {
  return (
    <div className="contenedor legal">
      <div className="cab-pagina">
        <span className="etiqueta">Tus datos</span>
        <h1>Eliminar tu cuenta</h1>
      </div>
      <h2>Desde la app</h2>
      <p>Abre En Comparsa → pestaña «Mi comparsa» → toca tu nombre → «Borrar mi cuenta».</p>
      <h2>Desde esta página</h2>
      <BorrarCuenta />
      <h2>Por correo</h2>
      <p>Escribe a <a href={`mailto:${CONTACTO}?subject=Eliminar%20mi%20cuenta`}>{CONTACTO}</a> desde el correo de tu cuenta. La borramos en un plazo máximo de 30 días.</p>
      <h2>Qué se borra</h2>
      <p>Tu cuenta, tu nombre y correo, tus fiestas seguidas, tus avisos, tus confirmaciones de asistencia y tu ficha y teléfono en las comparsas a las que pertenecías. Si eras el único administrador de una comparsa, la administración pasa a otro miembro; si eras su único miembro, la comparsa se borra entera. Las facturas emitidas a una comparsa se conservan el tiempo que exige la ley.</p>
    </div>
  );
}
