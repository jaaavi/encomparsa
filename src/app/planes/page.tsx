import type { Metadata } from 'next';
import Link from 'next/link';
import { Rombo } from '@/components/Marca';
import { DIAS_PRUEBA, PLANES } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Planes para comparsas y juntas',
  description: 'Gestiona tu comparsa o tu junta de fiestas con En Comparsa: censo, comunicados, agenda, cuotas y programa oficial.',
};

const eur = (n: number) => n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const COMUN = [
  'Censo de miembros con cargos y papeles (junta, tesorería…)',
  'Altas con un código de invitación, sin papeleo',
  'Comunicados que llegan como notificación al móvil',
  'Agenda de ensayos, cenas y reuniones con confirmación de asistencia',
  'Control de cuotas: quién ha pagado y quién debe',
  'Miembros ilimitados, también los que no usan la app',
];

export default function Planes() {
  return (
    <div className="contenedor">
      <div className="cab-pagina">
        <span className="etiqueta">Para comparsas y juntas</span>
        <h1>Lleva tu comparsa en el bolsillo</h1>
        <p>La app es gratis para todos los festeros. La comparsa o la junta paga un plan y gestiona desde el móvil todo lo que hoy va por grupos de WhatsApp y hojas de cálculo.</p>
      </div>
      <div className="precios">
        {(['comparsa', 'junta'] as const).map((k) => {
          const p = PLANES[k];
          return (
            <section key={k} className={`precio arco ${k === 'junta' ? 'precio-destacado' : ''}`}>
              <span className="etiqueta">{p.nombre}</span>
              <p className="muted">{p.para}</p>
              <p className="cifra">{eur(p.anyo)}<small> / año</small></p>
              <p className="muted">o {eur(p.mes)} al mes · IVA incluido</p>
              <ul>
                {COMUN.map((t) => <li key={t}><Rombo /> <span>{t}</span></li>)}
                {k === 'junta' ? (
                  <>
                    <li><Rombo color="#B3242E" /> <span><strong>Edita el programa oficial</strong> de tu fiesta en la app</span></li>
                    <li><Rombo color="#B3242E" /> <span><strong>Avisa al momento</strong> a todos los que siguen la fiesta si cambia una hora o un recorrido</span></li>
                  </>
                ) : null}
              </ul>
              <Link href="/panel/" className="boton">Contratar</Link>
            </section>
          );
        })}
      </div>
      <div className="filete faq">
        <h2>Preguntas frecuentes</h2>
        <h3>¿Puedo probarlo antes?</h3>
        <p>Sí. Crea tu comparsa o tu junta desde la app y tendrás {DIAS_PRUEBA} días de gestión completa, sin tarjeta.</p>
        <h3>¿Pagan los miembros?</h3>
        <p>No. La app es gratis para todos. Solo paga la comparsa o la junta, por el plan de gestión.</p>
        <h3>¿Cómo se paga?</h3>
        <p>Con tarjeta a través de Stripe, desde el <Link href="/panel/">panel</Link>. Recibes factura con los datos fiscales de la comparsa o asociación.</p>
        <h3>¿Y si no renovamos?</h3>
        <p>No se borra nada: todo queda en solo lectura hasta que se renueve.</p>
        <h3>¿Quién verifica a la junta?</h3>
        <p>Nosotros. Antes de que una junta pueda editar el programa oficial comprobamos que es quien dice ser. Escríbenos desde el correo oficial de la asociación.</p>
      </div>
    </div>
  );
}
