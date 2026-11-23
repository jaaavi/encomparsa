import Link from 'next/link';

const ESPADA = 'M-32 -3.2 L48 -3.2 L57 0 L48 3.2 L-32 3.2 Z M-36 -12 H-32 V12 H-36 Z M-48 -2.6 H-36 V2.6 H-48 Z M-54.5 0 a3.6 3.6 0 1 0 7.2 0 a3.6 3.6 0 1 0 -7.2 0 Z';
const ALFANJE = 'M-32 -2.8 Q20 -2.4 57 -6 Q50 3.2 34 4.4 Q4 4.4 -32 2.8 Z M-36 -10.5 H-32 V10.5 H-36 Z M-48 -2.6 H-36 V2.6 H-48 Z M-54.5 0 a3.6 3.6 0 1 0 7.2 0 a3.6 3.6 0 1 0 -7.2 0 Z';
const ESTRELLA = 'M50 27.726 L56.524 34.25 L65.75 34.25 L65.75 43.476 L72.274 50 L65.75 56.524 L65.75 65.75 L56.524 65.75 L50 72.274 L43.476 65.75 L34.25 65.75 L34.25 56.524 L27.726 50 L34.25 43.476 L34.25 34.25 L43.476 34.25 Z';
const HUECO = ' M42.8 50 a7.2 7.2 0 1 0 14.4 0 a7.2 7.2 0 1 0 -14.4 0 Z';

type Variante = 'color' | 'oscuro' | 'gules' | 'blanco';
const VARIANTES: Record<Variante, [string, string, string]> = {
  color: ['#2C4FA3', '#16795A', '#B3242E'],
  oscuro: ['#F6F2EA', '#F6F2EA', '#B3242E'],
  gules: ['#F6F2EA', '#F6F2EA', '#D4A23A'],
  blanco: ['#F6F2EA', '#F6F2EA', '#F6F2EA'],
};

/** El emblema de En Comparsa: espada y alfanje cruzados con la estrella de ocho puntas en el cruce. */
export function Emblema({ size = 40, variante = 'color', id }: { size?: number; variante?: Variante; id: string }) {
  const [espada, alfanje, estrella] = VARIANTES[variante];
  const m = `em-${id}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="emblema">
      <defs>
        <mask id={m} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <rect width="100" height="100" fill="#fff" />
          <path d={ESTRELLA} fill="#000" stroke="#000" strokeWidth="7" />
        </mask>
      </defs>
      <g mask={`url(#${m})`}>
        <path fill={espada} transform="translate(50 50) scale(0.93) rotate(-45)" d={ESPADA} />
        <path fill={alfanje} transform="translate(50 50) scale(-0.93 0.93) rotate(-45)" d={ALFANJE} />
      </g>
      <path fill={estrella} fillRule="evenodd" d={ESTRELLA + HUECO} />
    </svg>
  );
}

/** Estrella de ocho puntas sola. */
export function Estrella({ size = 16, color = '#B3242E', hueco }: { size?: number; color?: string; hueco?: boolean; fondo?: string }) {
  return (
    <svg width={size} height={size} viewBox="25 25 50 50" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path fill={color} fillRule="evenodd" d={hueco ? ESTRELLA + HUECO : ESTRELLA} />
    </svg>
  );
}

/** Rombo pequeño que hace de viñeta. */
export function Rombo({ color = '#D4A23A', size = 10 }: { color?: string; size?: number }) {
  return <span aria-hidden="true" className="rombo" style={{ width: size, height: size, background: color }} />;
}

/** Escudo de comparsa con iniciales. */
export function Escudo({ texto, color, ancho = 36 }: { texto: string; color: string; ancho?: number }) {
  return (
    <span className="escudo-c" style={{ width: ancho, height: Math.round(ancho * 1.18), background: color, fontSize: Math.round(ancho * 0.36) }} aria-hidden="true">
      {texto}
    </span>
  );
}

export function Cabecera() {
  return (
    <header className="cabecera">
      <div className="cabecera-in">
        <Link href="/" className="marca" aria-label="En Comparsa, inicio">
          <Emblema size={42} id="cab" />
          <span className="marca-txt">En Comparsa</span>
        </Link>
        <nav aria-label="Principal" className="nav">
          <Link href="/calendario/">Calendario</Link>
          <Link href="/#fiestas">Fiestas</Link>
          <Link href="/planes/">Para comparsas</Link>
          <Link href="/app/" className="nav-app">Descargar<span className="solo-ancho"> la app</span></Link>
        </nav>
      </div>
    </header>
  );
}

export function Pie() {
  return (
    <footer className="pie">
      <div className="pie-in">
        <div className="marca">
          <Emblema size={40} variante="oscuro" id="pie" />
          <span className="marca-txt">En Comparsa</span>
        </div>
        <p>Las fiestas de Moros y Cristianos, pueblo a pueblo. Una app de APPIS.</p>
        <nav aria-label="Legal" className="pie-enlaces">
          <Link href="/planes/">Planes</Link>
          <Link href="/panel/">Panel</Link>
          <Link href="/ayuda/">Ayuda</Link>
          <Link href="/privacidad/">Privacidad</Link>
          <Link href="/terminos/">Términos</Link>
          <Link href="/eliminar-cuenta/">Eliminar cuenta</Link>
        </nav>
        <p className="pie-nota">
          Horarios recogidos de los programas oficiales y de la prensa local. Comprueba siempre el programa de cada
          comisión: los actos pueden cambiar.
        </p>
      </div>
      <div className="partido" aria-hidden="true"><span /><span /></div>
    </footer>
  );
}
