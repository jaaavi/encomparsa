import type { Metadata } from 'next';
import { Estrella } from '@/components/Marca';

export const metadata: Metadata = { title: 'Descarga la app' };
// Cuando estén publicadas, pon aquí los enlaces de las tiendas.
const APP_STORE = process.env.NEXT_PUBLIC_APP_STORE_URL;
const GOOGLE_PLAY = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL;

export default function DescargaApp() {
  return (
    <div className="contenedor">
      <div className="cab-pagina">
        <Estrella size={64} fondo="#F3E9D2" />
        <span className="etiqueta">La app</span>
        <h1>Descarga En Comparsa</h1>
        <p>Gratis para iOS y Android. Sigue tus fiestas, recibe los cambios de horario y entra en tu comparsa.</p>
        <div className="hero-acciones" style={{ justifyContent: 'center' }}>
          {APP_STORE ? <a className="boton" href={APP_STORE}>App Store</a> : <span className="boton" aria-disabled="true">App Store · muy pronto</span>}
          {GOOGLE_PLAY ? <a className="boton" href={GOOGLE_PLAY}>Google Play</a> : <span className="boton" aria-disabled="true">Google Play · muy pronto</span>}
        </div>
      </div>
    </div>
  );
}
