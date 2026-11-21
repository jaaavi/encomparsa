import type { Metadata } from 'next';
import { Panel } from './Panel';

export const metadata: Metadata = { title: 'Panel de tu comparsa', robots: { index: false } };

export default function PaginaPanel() {
  return (
    <div className="contenedor">
      <div className="cab-pagina">
        <span className="etiqueta">Administración</span>
        <h1>Panel de tu comparsa</h1>
        <p>Contrata o renueva el plan de tu comparsa o junta, cambia la tarjeta y descarga tus facturas.</p>
      </div>
      <div style={{ maxWidth: 720, margin: '28px auto 0' }}>
        <Panel />
      </div>
    </div>
  );
}
