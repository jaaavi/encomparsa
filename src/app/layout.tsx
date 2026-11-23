import type { Metadata, Viewport } from 'next';
import { Animaciones } from '@/components/Animaciones';
import { Cabecera, Pie } from '@/components/Marca';
// Fuentes alojadas en la propia web (sin llamadas a Google Fonts).
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/700.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/ibm-plex-mono/600.css';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'En Comparsa · Fiestas de Moros y Cristianos', template: '%s · En Comparsa' },
  description:
    'Calendario, programas, horarios y orden de desfile de las fiestas de Moros y Cristianos, pueblo a pueblo.',
  icons: { icon: '/favicon.svg' },
};
export const viewport: Viewport = { themeColor: '#17120D', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('con-js')" }} />
      </head>
      <body>
        <Animaciones />
        <Cabecera />
        <main>{children}</main>
        <Pie />
      </body>
    </html>
  );
}
