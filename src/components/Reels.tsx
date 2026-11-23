'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import type { Reel } from '@/lib/reels';

/** Carrusel de reels: se desliza con el dedo o con las flechas; al tocar uno se reproduce con sonido y se paran los demás. */
export function CarruselReels({ reels }: { reels: Reel[] }) {
  const pista = useRef<HTMLDivElement>(null);
  const [sonando, setSonando] = useState<string | null>(null);
  const mover = (dir: 1 | -1) => {
    const p = pista.current;
    if (!p) return;
    const tarjeta = p.querySelector<HTMLElement>('.reel');
    p.scrollBy({ left: dir * ((tarjeta?.offsetWidth ?? 260) + 18), behavior: 'smooth' });
  };
  const tocar = (id: string) => {
    const p = pista.current;
    if (!p) return;
    p.querySelectorAll<HTMLVideoElement>('video').forEach((v) => {
      if (v.dataset.id === id) {
        if (v.paused) { v.muted = false; v.play().catch(() => {}); setSonando(id); } else { v.pause(); setSonando(null); }
      } else { v.pause(); }
    });
  };
  return (
    <div className="carrusel">
      <div className="carrusel-pista" ref={pista} role="list">
        {reels.map((r) => (
          <article key={r.id} className={`reel aparece${sonando === r.id ? ' sonando' : ''}`} role="listitem">
            <div className="reel-video">
              <video data-id={r.id} src={`/reels/${r.id}.mp4`} poster={`/reels/${r.id}.webp`} preload="none" playsInline loop
                onEnded={() => setSonando(null)} onPause={() => setSonando((s) => (s === r.id ? null : s))} aria-label={`${r.titulo}, ${r.pueblo}`} />
              <button type="button" className="reel-play" onClick={() => tocar(r.id)} aria-label={sonando === r.id ? `Pausar ${r.titulo}` : `Ver ${r.titulo}`}>
                <span aria-hidden="true">{sonando === r.id ? '❚❚' : '▶'}</span>
              </button>
              <span className="reel-dur">{Math.floor(r.segundos / 60)}:{String(r.segundos % 60).padStart(2, '0')}</span>
            </div>
            <span className="etiqueta">{r.pueblo}</span>
            <h3>{r.titulo}</h3>
            <Link href={`/fiestas/${r.fiesta}/`} className="reel-enlace">Ver la fiesta ›</Link>
          </article>
        ))}
      </div>
      <div className="carrusel-flechas">
        <button type="button" onClick={() => mover(-1)} aria-label="Anteriores">‹</button>
        <button type="button" onClick={() => mover(1)} aria-label="Siguientes">›</button>
      </div>
    </div>
  );
}
