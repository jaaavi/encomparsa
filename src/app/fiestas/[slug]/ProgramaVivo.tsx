'use client';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { actos as catalogo, fiestas, hoyIso, programaDe, type Acto, type Fiesta, type Programa as Prog } from '@/shared';
import { Estrella } from '@/components/Marca';
import { fb, firebaseDisponible } from '@/lib/firebase';
import { Programa } from './Programa';

const webUrl = (w: string) => (w.includes('@') ? `mailto:${w}` : w.startsWith('http') ? w : `https://${w}`);

/**
 * Programa de la fiesta. La página se genera con los datos incluidos en la web; al abrirla, recalcula con la fecha de hoy
 * y, si la junta o la revisión han publicado el programa en Firestore, usa ese (sin tener que volver a publicar la web).
 */
export function ProgramaVivo({ slug, inicial, nombre, web }: { slug: string; inicial: Prog; nombre: string; web: string }) {
  const [prog, setProg] = useState<Prog>(inicial);
  useEffect(() => {
    setProg(programaDe(slug, hoyIso()));
    if (!firebaseDisponible) return;
    let vivo = true;
    (async () => {
      try {
        const { db } = fb();
        const [fs, as] = await Promise.all([getDoc(doc(db, `fiestas/${slug}`)), getDocs(collection(db, `fiestas/${slug}/actos`))]);
        if (!vivo) return;
        if (fs.exists()) {
          const i = fiestas.findIndex((f) => f.slug === slug);
          if (i >= 0) fiestas[i] = { ...fiestas[i], ...(fs.data() as Partial<Fiesta>), slug };
        }
        if (!as.empty) {
          const nuevos = as.docs.map((x) => {
            const { actualizadoEn: _a, actualizadoPor: _b, ...resto } = x.data() as Acto & { actualizadoEn?: unknown; actualizadoPor?: unknown };
            return { ...resto, id: x.id } as Acto;
          }).filter((a) => !a.cancelado);
          const otros = catalogo.filter((a) => a.fiesta !== slug);
          catalogo.splice(0, catalogo.length, ...otros, ...nuevos);
        }
        setProg(programaDe(slug, hoyIso()));
      } catch { /* sin conexión: se queda el programa incluido en la web */ }
    })();
    return () => { vivo = false; };
  }, [slug]);

  const dias = [...new Set(prog.actos.map((a) => a.fecha))];
  if (!prog.actos.length) {
    return (
      <div className="filete vacio">
        <Estrella size={28} />
        <h2>Programa pendiente</h2>
        <p className="muted">
          Aún no tenemos los horarios de {nombre}. Los añadiremos en cuanto la organización publique el programa.
        </p>
        {web ? (
          <a className="boton boton-sec" href={webUrl(web)} target="_blank" rel="noopener noreferrer">Web de la organización</a>
        ) : null}
      </div>
    );
  }
  return (
    <>
      <div className="titulo-seccion" style={{ marginTop: 0 }}>
        <h2>Programa {prog.edicion?.inicio.slice(0, 4)}</h2>
      </div>
      {prog.previsto ? (
        <div className="previsto" role="note">
          <strong>Programa previsto</strong>
          <span>
            Calculado a partir del programa de {prog.anyoBase}: los actos suelen repetirse, pero las horas pueden cambiar.
            Lo cambiaremos por el oficial en cuanto se publique.
          </span>
        </div>
      ) : null}
      <Programa key={dias.join()} actos={prog.actos} dias={dias} />
    </>
  );
}
