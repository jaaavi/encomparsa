import Link from 'next/link';

/** Logo A: estrella de ocho puntas (dos cuadrados girados) con el centro en lapislázuli. */
export function Estrella({ size = 40, fondo = '#8E1B23' }: { size?: number; fondo?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="14" width="36" height="36" fill="#C9A13B" />
      <rect x="14" y="14" width="36" height="36" fill="#C9A13B" transform="rotate(45 32 32)" />
      <rect x="19" y="19" width="26" height="26" fill={fondo} />
      <rect x="19" y="19" width="26" height="26" fill={fondo} transform="rotate(45 32 32)" />
      <circle cx="32" cy="32" r="7" fill="#C9A13B" />
      <circle cx="32" cy="32" r="3" fill="#1F3A6E" />
    </svg>
  );
}

/** Tira de lacería: estrellas doradas sobre carmesí. */
export function Laceria({ id = 'lazo' }: { id?: string }) {
  return (
    <svg className="laceria" width="100%" height="16" aria-hidden="true">
      <defs>
        <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="#8E1B23" />
          <rect x="5" y="5" width="6" height="6" fill="#C9A13B" />
          <rect x="5" y="5" width="6" height="6" fill="#C9A13B" transform="rotate(45 8 8)" />
        </pattern>
      </defs>
      <rect width="100%" height="16" fill={`url(#${id})`} />
    </svg>
  );
}

export function Cabecera() {
  return (
    <header className="cabecera">
      <Laceria id="lazo-cab" />
      <div className="cabecera-in">
        <Link href="/" className="marca" aria-label="En Comparsa, inicio">
          <Estrella size={40} />
          <span className="marca-txt">En Comparsa</span>
        </Link>
        <nav aria-label="Principal" className="nav">
          <Link href="/calendario/">Calendario</Link>
          <Link href="/#fiestas">Fiestas</Link>
          <Link href="/planes/">Para comparsas</Link>
          <Link href="/app/">La app</Link>
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
          <Estrella size={32} fondo="#22180F" />
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
    </footer>
  );
}

/** Rombo pequeño que hace de viñeta. */
export function Rombo({ color = '#C9A13B', size = 12 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect x="14" y="14" width="36" height="36" fill={color} />
      <rect x="14" y="14" width="36" height="36" fill={color} transform="rotate(45 32 32)" />
    </svg>
  );
}
