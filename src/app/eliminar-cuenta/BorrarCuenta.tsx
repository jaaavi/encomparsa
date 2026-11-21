'use client';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { ConCuenta } from '@/components/Cuenta';
import { fb, mensajeError } from '@/lib/firebase';

export function BorrarCuenta() {
  const [hecho, setHecho] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ocupado, setOcupado] = useState(false);
  if (hecho) return <p className="exito" role="status">Tu cuenta y tus datos se han borrado.</p>;
  return (
    <ConCuenta titulo="Entra para borrar tu cuenta">
      {(u) => (
        <div className="filete formulario">
          <p>Vas a borrar la cuenta <strong>{u.email}</strong>. No se puede deshacer.</p>
          {error ? <p className="aviso" role="alert">{error}</p> : null}
          <button className="boton boton-peligro" disabled={ocupado} onClick={async () => {
            if (!window.confirm('¿Seguro que quieres borrar tu cuenta y tus datos? No se puede deshacer.')) return;
            setOcupado(true); setError(null);
            try { await fb().llamar('borrarCuenta'); await signOut(fb().auth).catch(() => {}); setHecho(true); }
            catch (e) { setError(mensajeError(e)); setOcupado(false); }
          }}>{ocupado ? 'Borrando…' : 'Borrar mi cuenta'}</button>
        </div>
      )}
    </ConCuenta>
  );
}
