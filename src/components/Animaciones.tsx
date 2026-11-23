'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Animaciones al entrar en pantalla: lo marcado con `.aparece` sube y aparece, y las cifras con `data-cuenta` cuentan hasta su valor.
 * Si el sistema pide reducir el movimiento, todo se muestra quieto.
 */
export function Animaciones() {
  const ruta = usePathname();
  useEffect(() => {
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.add('con-js');
    const elementos = Array.from(document.querySelectorAll<HTMLElement>('.aparece:not(.visto)'));
    const cifras = Array.from(document.querySelectorAll<HTMLElement>('[data-cuenta]'));
    if (quieto || !('IntersectionObserver' in window)) {
      elementos.forEach((e) => e.classList.add('visto'));
      return;
    }
    const contar = (el: HTMLElement) => {
      const fin = Number(el.dataset.cuenta);
      const t0 = performance.now();
      const paso = (t: number) => {
        const k = Math.min(1, (t - t0) / 1100);
        el.textContent = String(Math.round(fin * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    };
    const io = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.classList.add('visto');
        if (el.dataset.cuenta) contar(el);
        io.unobserve(el);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    const vigilar = (lista: HTMLElement[]) => lista.forEach((el, i) => { el.style.setProperty('--retraso', `${(i % 4) * 70}ms`); io.observe(el); });
    vigilar(elementos);
    cifras.forEach((el) => io.observe(el));
    // Lo que se pinta después (datos que llegan de Firestore, listas que se filtran) también entra animado
    const mo = new MutationObserver((cambios) => {
      const nuevos: HTMLElement[] = [];
      for (const c of cambios) c.addedNodes.forEach((n) => {
        if (!(n instanceof HTMLElement)) return;
        if (n.matches('.aparece:not(.visto)')) nuevos.push(n);
        n.querySelectorAll<HTMLElement>('.aparece:not(.visto)').forEach((x) => nuevos.push(x));
      });
      if (nuevos.length) vigilar(nuevos);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [ruta]);
  return null;
}
