import { APP_STORE, GOOGLE_PLAY } from '@/lib/config';

function IconoPlay() {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" aria-hidden="true">
      <path d="M1 1.5v21l11-10.5z" fill="#34A853" />
      <path d="M1 1.5 15.5 9.6 12 12.9z" fill="#4285F4" />
      <path d="M1 22.5 15.5 14.4 12 11.1z" fill="#EA4335" />
      <path d="m15.5 9.6 4.6 2.6c.8.5.8 1.2 0 1.7l-4.6 2.5L12 12z" fill="#FBBC04" />
    </svg>
  );
}
function IconoApple() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" aria-hidden="true" fill="currentColor">
      <path d="M16.4 12.7c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4.1zM13.9 5.1c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.5z" />
    </svg>
  );
}

/** Botones de descarga. Mientras no haya enlace, se muestran como «muy pronto». */
export function Tiendas({ oscuro }: { oscuro?: boolean }) {
  const tiendas = [
    { nombre: 'Google Play', pre: GOOGLE_PLAY ? 'Disponible en' : 'Muy pronto en', url: GOOGLE_PLAY, icono: <IconoPlay /> },
    { nombre: 'App Store', pre: APP_STORE ? 'Descárgala en' : 'Muy pronto en', url: APP_STORE, icono: <IconoApple /> },
  ];
  return (
    <div className={`tiendas-fila${oscuro ? ' oscuro' : ''}`}>
      {tiendas.map((t) => {
        const contenido = (
          <>
            {t.icono}
            <span><small>{t.pre}</small>{t.nombre}</span>
          </>
        );
        return t.url ? (
          <a key={t.nombre} href={t.url} className="tienda" rel="noopener">{contenido}</a>
        ) : (
          <span key={t.nombre} className="tienda tienda-pronto" aria-disabled="true">{contenido}</span>
        );
      })}
    </div>
  );
}

/** Captura de la app dentro de un marco de móvil. */
export function Movil({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`movil ${className}`}>
      <img src={src} alt={alt} width={540} height={960} loading="lazy" decoding="async" />
    </div>
  );
}
