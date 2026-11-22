import type { Metadata } from 'next';
import { Estrella } from '@/components/Marca';
import { Movil, Tiendas } from '@/components/Tiendas';

export const metadata: Metadata = { title: 'Descarga la app' };

export default function DescargaApp() {
  return (
    <div className="contenedor">
      <div className="cab-pagina">
        <Estrella size={64} fondo="#F3E9D2" />
        <span className="etiqueta">La app</span>
        <h1>Descarga En Comparsa</h1>
        <p>Gratis para Android y iPhone. Sigue tus fiestas, recibe los cambios de horario y entra en tu comparsa.</p>
        <Tiendas />
        <div style={{ width: 240, marginTop: 24 }}><Movil src="/capturas/1-inicio.webp" alt="Pantalla de inicio de En Comparsa" /></div>
      </div>
    </div>
  );
}
