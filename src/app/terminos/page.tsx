import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACTO, DIAS_PRUEBA, TITULAR } from '@/lib/config';

export const metadata: Metadata = { title: 'Términos de uso' };

export default function Terminos() {
  return (
    <div className="contenedor legal">
      <div className="cab-pagina"><span className="etiqueta">Legal</span><h1>Términos de uso</h1><p>Última actualización: noviembre de 2026</p></div>

      <h2>1. El servicio</h2>
      <p>En Comparsa es una app y una web, ofrecidas por {TITULAR.nombre} (NIF {TITULAR.nif}), que reúnen información de las fiestas de Moros y Cristianos y herramientas para que las comparsas y juntas se organicen. Usar la parte informativa no requiere cuenta.</p>

      <h2>2. La información de las fiestas</h2>
      <p>Los programas, horarios y recorridos proceden de fuentes oficiales y de la prensa local, o los publica directamente la junta verificada de cada fiesta. Pueden cambiar sin aviso. Consulta siempre el programa oficial: En Comparsa no responde de cambios, suspensiones o errores de terceros.</p>

      <h2>3. Tu cuenta</h2>
      <p>Debes tener al menos 14 años, dar datos verdaderos y custodiar tu contraseña. Puedes borrar tu cuenta cuando quieras. Podemos suspender cuentas que hagan un uso abusivo, ilegal o que suplanten a otras personas u organizaciones.</p>

      <h2>4. Comparsas y juntas</h2>
      <p>Quien crea una comparsa o junta declara que está autorizado por ella. La organización es responsable del contenido que publica y de los datos de sus miembros, y debe contar con la base legal para tratarlos (por ejemplo, la autorización de los padres en el caso de menores). Las juntas solo pueden editar el programa oficial tras ser verificadas por En Comparsa.</p>

      <h2>5. Planes y pagos</h2>
      <ul>
        <li>La app es gratuita para los usuarios. La gestión de comparsas y juntas requiere un plan de pago, mensual o anual, que contrata la organización desde el <Link href="/panel/">panel web</Link>.</li>
        <li>Cada organización nueva tiene {DIAS_PRUEBA} días de prueba sin compromiso.</li>
        <li>El plan se renueva automáticamente al final de cada periodo hasta que se cancele desde el panel. Al cancelar, sigue activo hasta el final del periodo pagado; no se devuelven periodos parciales salvo obligación legal.</li>
        <li>Si el plan no está activo, la información de la organización sigue disponible en modo de solo lectura.</li>
        <li>Los cobros los gestiona Stripe. Los precios incluyen IVA y pueden cambiar; los cambios se avisan con 30 días de antelación y se aplican en la siguiente renovación.</li>
      </ul>

      <h2>6. Uso aceptable</h2>
      <p>No está permitido publicar contenido ilegal, ofensivo o que vulnere derechos de terceros, intentar acceder a datos de otras organizaciones ni interferir en el funcionamiento del servicio.</p>

      <h2>7. Responsabilidad</h2>
      <p>Trabajamos para que el servicio esté disponible y sea seguro, pero no podemos garantizar que funcione sin interrupciones. En la medida que permita la ley, la responsabilidad de En Comparsa se limita al importe pagado por la organización en los últimos 12 meses.</p>

      <h2>8. Privacidad</h2>
      <p>El tratamiento de datos se explica en la <Link href="/privacidad/">política de privacidad</Link>.</p>

      <h2>9. Ley y contacto</h2>
      <p>Se aplica la ley española. Para cualquier duda: <a href={`mailto:${CONTACTO}`}>{CONTACTO}</a>. Si eres consumidor, puedes acudir a los tribunales de tu domicilio.</p>
    </div>
  );
}
