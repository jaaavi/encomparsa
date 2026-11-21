import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACTO, TITULAR } from '@/lib/config';

export const metadata: Metadata = { title: 'Política de privacidad' };

export default function Privacidad() {
  return (
    <div className="contenedor legal">
      <div className="cab-pagina"><span className="etiqueta">Legal</span><h1>Política de privacidad</h1><p>Última actualización: noviembre de 2026</p></div>

      <h2>1. Quién trata tus datos</h2>
      <p>{TITULAR.nombre}, NIF {TITULAR.nif}, con domicilio en {TITULAR.domicilio} («En Comparsa»). Contacto: <a href={`mailto:${CONTACTO}`}>{CONTACTO}</a>.</p>
      <p>Cuando una comparsa o junta usa En Comparsa para gestionar a sus miembros, <strong>la comparsa o junta es la responsable</strong> de los datos de su censo, cuotas y comunicados, y En Comparsa los trata por su cuenta como encargado del tratamiento, solo para prestarle el servicio.</p>

      <h2>2. Qué datos tratamos y para qué</h2>
      <ul>
        <li><strong>Sin cuenta:</strong> las fiestas que sigues, tus comparsas marcadas y tus recordatorios se guardan solo en tu móvil.</li>
        <li><strong>Cuenta:</strong> nombre, correo y contraseña (cifrada por Google Firebase). Para identificarte y darte acceso a tus comparsas.</li>
        <li><strong>Notificaciones:</strong> un identificador técnico del móvil (token push) para enviarte los avisos que activas: cambios de horario de las fiestas que sigues y comunicados o convocatorias de tus comparsas.</li>
        <li><strong>Gestión de comparsas:</strong> los datos que introduce la comparsa: nombre, cargo, papel, teléfono (solo visible para la junta y el propio miembro), asistencia a convocatorias y estado de pago de las cuotas. También puede haber miembros sin cuenta (por ejemplo, menores) dados de alta por la comparsa.</li>
        <li><strong>Pagos de planes:</strong> solo de las comparsas y juntas que contratan, a través de Stripe. En Comparsa no ve ni guarda los datos de la tarjeta.</li>
      </ul>
      <p>No usamos tus datos para publicidad, no los vendemos y no hacemos perfiles.</p>

      <h2>3. Base legal</h2>
      <ul>
        <li>Ejecución del contrato (términos de uso) para la cuenta, la gestión de comparsas y los planes.</li>
        <li>Tu consentimiento para las notificaciones, que puedes retirar en cualquier momento desde la app o los ajustes del móvil.</li>
        <li>Obligación legal para conservar facturas.</li>
      </ul>

      <h2>4. Con quién se comparten</h2>
      <p>Solo con los proveedores necesarios para que el servicio funcione, con contratos de encargo del tratamiento:</p>
      <ul>
        <li><strong>Google Firebase</strong> (Google Ireland Ltd.): cuentas, base de datos y funciones, alojados en la Unión Europea (región europe-west1, Bélgica).</li>
        <li><strong>Expo</strong> (650 Industries, Inc.), Apple y Google: entrega de notificaciones push.</li>
        <li><strong>Stripe</strong> (Stripe Payments Europe, Ltd.): cobro de los planes.</li>
      </ul>
      <p>Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo con las garantías del RGPD (decisiones de adecuación o cláusulas contractuales tipo).</p>
      <p>Dentro de una comparsa, los miembros ven el censo (nombres y cargos), los comunicados y la agenda. Los teléfonos y los pagos de los demás solo los ve la junta y la tesorería.</p>

      <h2>5. Cuánto tiempo</h2>
      <p>Mientras tengas la cuenta. Si la borras, eliminamos tus datos de inmediato, salvo las facturas, que se guardan el plazo legal. Los datos de una comparsa se borran cuando lo pide su administración o cuando se elimina la comparsa.</p>

      <h2>6. Menores</h2>
      <p>Para crear una cuenta hay que tener al menos 14 años. Los menores pueden figurar en el censo de su comparsa sin cuenta; en ese caso la comparsa es responsable de contar con la autorización de sus padres o tutores.</p>

      <h2>7. Tus derechos</h2>
      <p>Puedes acceder, rectificar, suprimir, oponerte, limitar el tratamiento y pedir la portabilidad de tus datos escribiendo a <a href={`mailto:${CONTACTO}`}>{CONTACTO}</a>. Puedes <Link href="/eliminar-cuenta/">borrar tu cuenta</Link> en cualquier momento desde la app o la web. Si los datos los gestiona tu comparsa, también puedes dirigirte a ella. Si crees que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).</p>

      <h2>8. Seguridad</h2>
      <p>Las comunicaciones van cifradas. El acceso a los datos de cada comparsa está limitado por reglas de seguridad en el servidor según el papel de cada persona, y las acciones sensibles (altas, cambios de papel, borrado de cuentas) solo las ejecuta el servidor.</p>
    </div>
  );
}
