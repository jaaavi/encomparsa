import type { Metadata } from 'next';
import { Emblema } from '@/components/Marca';
import { Movil, Tiendas } from '@/components/Tiendas';

export const metadata: Metadata = { title: 'Descarga la app' };

export default function DescargaApp() {
  return (
    <div className="contenedor">
      <div className="cab-pagina">
        <Emblema size={84} id="descarga" />
        <span className="etiqueta">La app</span>
        <h1>Descarga En Comparsa</h1>
        <p>Gratis para Android y iPhone. Sigue tus fiestas, recibe los cambios de horario y entra en tu comparsa.</p>
        <Tiendas />
        <div style={{ marginTop: 28 }}><Movil src="/capturas/1-inicio.webp" alt="Pantalla de inicio de En Comparsa" ancho="clamp(220px, 60vw, 280px)" prioridad /></div>
      </div>
    </div>
  );
}
