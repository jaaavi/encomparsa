import type { Metadata } from 'next';
import { Revisar } from './Revisar';

export const metadata: Metadata = { title: 'Revisar programas', robots: { index: false, follow: false } };

export default function PaginaRevisar() {
  return (
    <div className="contenedor">
      <div className="cab-pagina">
        <span className="etiqueta">Administración</span>
        <h1>Revisar programas</h1>
        <p>La IA busca el programa de cada fiesta y lo deja aquí. Nada se publica hasta que lo apruebas. Corrige lo que haga falta antes.</p>
      </div>
      <Revisar />
    </div>
  );
}
