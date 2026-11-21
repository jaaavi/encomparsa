import type { Metadata, Viewport } from 'next';
import { Cabecera, Pie } from '@/components/Marca';
// Fuentes alojadas en la propia web (sin llamadas a Google Fonts).
import '@fontsource/cinzel-decorative/700.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/alegreya/700.css';
import '@fontsource/alegreya/800.css';
import '@fontsource/alegreya-sans/400.css';
import '@fontsource/alegreya-sans/500.css';
import '@fontsource/alegreya-sans/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'En Comparsa · Fiestas de Moros y Cristianos', template: '%s · En Comparsa' },
  description:
    'Calendario, programas, horarios y orden de desfile de las fiestas de Moros y Cristianos, pueblo a pueblo.',
  icons: { icon: '/favicon.svg' },
};
export const viewport: Viewport = { themeColor: '#8E1B23', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Cabecera />
        <main>{children}</main>
        <Pie />
      </body>
    </html>
  );
}
