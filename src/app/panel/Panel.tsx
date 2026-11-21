'use client';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { ConCuenta } from '@/components/Cuenta';
import { fb, mensajeError } from '@/lib/firebase';
import { PLANES } from '@/lib/config';

interface Org {
  id: string; nombre: string; tipo: 'comparsa' | 'junta';
  plan: { estado: string; hasta?: { toDate: () => Date }; periodo?: string | null; stripeSubscriptionId?: string; cancelaAlFinal?: boolean };
}
const ESTADO: Record<string, string> = { prueba: 'Periodo de prueba', activo: 'Activo', impagado: 'Pago pendiente', cancelado: 'Cancelado', pendiente: 'Pendiente' };
const eur = (n: number) => n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

function Organizaciones({ u, salir }: { u: User; salir: () => void }) {
  const [orgs, setOrgs] = useState<Org[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ocupado, setOcupado] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get('pago') === 'ok') setAviso('¡Pago recibido! El plan se activa en unos segundos.');
    if (q.get('pago') === 'cancelado') setAviso('Pago cancelado. No se ha cobrado nada.');
    (async () => {
      try {
        const { db } = fb();
        const ms = await getDocs(query(collection(db, `usuarios/${u.uid}/membresias`), where('rol', '==', 'admin')));
        const lista = await Promise.all(ms.docs.map(async (m) => {
          const o = await getDoc(doc(db, `organizaciones/${m.id}`));
          return { id: m.id, ...(o.data() as Omit<Org, 'id'>) };
        }));
        setOrgs(lista);
      } catch (e) { setError(mensajeError(e)); setOrgs([]); }
    })();
  }, [u.uid]);

  const ir = async (clave: string, fn: () => Promise<{ url: string }>) => {
    setOcupado(clave); setError(null);
    try { window.location.href = (await fn()).url; } catch (e) { setError(mensajeError(e)); setOcupado(null); }
  };

  if (!u.emailVerified) {
    return <div className="filete vacio"><h2>Confirma tu correo</h2><p className="muted">Abre el enlace que te enviamos al crear la cuenta y vuelve a entrar.</p><button className="boton boton-sec" onClick={salir}>Salir</button></div>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p className="muted">Sesión iniciada como <strong>{u.email}</strong>. <button className="enlace-boton" onClick={salir}>Salir</button></p>
      {aviso ? <p className="exito" role="status">{aviso}</p> : null}
      {error ? <p className="aviso" role="alert">{error}</p> : null}
      {orgs === null ? <p className="muted">Cargando…</p> : orgs.length === 0 ? (
        <div className="filete vacio">
          <h2>No administras ninguna comparsa</h2>
          <p className="muted">Crea tu comparsa o junta desde la app (pestaña «Mi comparsa») y vuelve aquí para contratar el plan.</p>
        </div>
      ) : orgs.map((o) => {
        const p = PLANES[o.tipo];
        const hasta = o.plan?.hasta?.toDate?.();
        const activo = !!hasta && hasta.getTime() > Date.now();
        const deStripe = !!o.plan?.stripeSubscriptionId;
        return (
          <section key={o.id} className="filete plan-org">
            <div>
              <span className="etiqueta">{o.tipo === 'junta' ? 'Junta' : 'Comparsa'}</span>
              <h2>{o.nombre}</h2>
              <p>Estado: <strong>{ESTADO[o.plan?.estado] ?? o.plan?.estado}</strong>{hasta ? ` · ${activo ? 'hasta' : 'terminó el'} ${hasta.toLocaleDateString('es-ES')}` : ''}</p>
              {o.plan?.cancelaAlFinal ? <p className="muted">No se renovará al final del periodo.</p> : null}
            </div>
            {deStripe && o.plan?.estado !== 'cancelado' ? (
              <button className="boton" disabled={!!ocupado} onClick={() => ir(`p-${o.id}`, () => fb().llamar('portalFacturacion', { orgId: o.id }))}>
                {ocupado === `p-${o.id}` ? 'Abriendo…' : 'Facturación y tarjeta'}
              </button>
            ) : (
              <div className="opciones-plan">
                <button className="boton" disabled={!!ocupado} onClick={() => ir(`a-${o.id}`, () => fb().llamar('crearCheckout', { orgId: o.id, periodo: 'anyo' }))}>
                  {ocupado === `a-${o.id}` ? 'Abriendo…' : `Anual · ${eur(p.anyo)}`}
                </button>
                <button className="boton boton-sec" disabled={!!ocupado} onClick={() => ir(`m-${o.id}`, () => fb().llamar('crearCheckout', { orgId: o.id, periodo: 'mes' }))}>
                  {ocupado === `m-${o.id}` ? 'Abriendo…' : `Mensual · ${eur(p.mes)}`}
                </button>
              </div>
            )}
          </section>
        );
      })}
      <p className="muted" style={{ fontSize: 14 }}>El pago se hace con Stripe. Puedes cancelar cuando quieras desde «Facturación y tarjeta»; el plan sigue activo hasta el final del periodo pagado.</p>
    </div>
  );
}

export function Panel() {
  return <ConCuenta titulo="Entra para gestionar el plan">{(u, salir) => <Organizaciones u={u} salir={salir} />}</ConCuenta>;
}
