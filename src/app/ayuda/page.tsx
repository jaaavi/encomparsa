import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACTO } from '@/lib/config';

export const metadata: Metadata = { title: 'Ayuda' };

export default function Ayuda() {
  return (
    <div className="contenedor legal">
      <div className="cab-pagina"><span className="etiqueta">Soporte</span><h1>Ayuda</h1></div>
      <h2>Contacto</h2>
      <p>Escríbenos a <a href={`mailto:${CONTACTO}`}>{CONTACTO}</a>. Respondemos en uno o dos días laborables.</p>
      <h2>No me llega el correo de confirmación</h2>
      <p>Mira en «Spam» o «Promociones». Desde la app (Mi comparsa → tu nombre) puedes reenviarlo.</p>
      <h2>¿Cómo entro en mi comparsa?</h2>
      <p>Pide el código de invitación a quien la administra. En la app: Mi comparsa → «Unirme con un código».</p>
      <h2>No me llegan los avisos</h2>
      <p>Activa las notificaciones de En Comparsa en los ajustes del móvil y, en la app, en la pestaña «Avisos».</p>
      <h2>Un horario está mal</h2>
      <p>Los programas salen de las webs y documentos oficiales de cada organización. Si ves un error, avísanos y lo corregimos. Si eres de la junta, mira los <Link href="/planes/">planes para juntas</Link>: podéis editar el programa vosotros mismos.</p>
      <h2>Borrar mi cuenta</h2>
      <p>Mira <Link href="/eliminar-cuenta/">cómo eliminar tu cuenta</Link>.</p>
    </div>
  );
}
