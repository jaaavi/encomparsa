'use client';
import { GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, type User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { fb, firebaseDisponible, mensajeError } from '@/lib/firebase';

/** Inicio de sesión con la misma cuenta de la app. Pinta `children(usuario)` cuando hay sesión. */
export function ConCuenta({ children, titulo }: { children: (u: User, salir: () => void) => React.ReactNode; titulo: string }) {
  const [usuario, setUsuario] = useState<User | null | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!firebaseDisponible) { setUsuario(null); return; }
    return onAuthStateChanged(fb().auth, (u) => setUsuario(u));
  }, []);

  if (!firebaseDisponible) return <div className="filete vacio"><p>El acceso aún no está activado.</p></div>;
  if (usuario === undefined) return <p className="muted">Cargando…</p>;
  if (usuario) return <>{children(usuario, () => signOut(fb().auth))}</>;

  const entrar = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); setOk(null); setCargando(true);
    try { await signInWithEmailAndPassword(fb().auth, email.trim(), clave); }
    catch (er) { setError(mensajeError(er)); } finally { setCargando(false); }
  };
  return (
    <form className="filete formulario" onSubmit={entrar}>
      <h2>{titulo}</h2>
      <p className="muted">Entra con la misma cuenta que usas en la app de En Comparsa.</p>
      <button type="button" className="boton boton-google" onClick={async () => {
        setError(null);
        try { await signInWithPopup(fb().auth, new GoogleAuthProvider()); } catch (er) { setError(mensajeError(er)); }
      }}>Continuar con Google</button>
      <p className="muted" style={{ fontSize: 14, textAlign: 'center' }}>o con tu correo</p>
      <label>Correo<input type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <label>Contraseña<input type="password" autoComplete="current-password" required value={clave} onChange={(e) => setClave(e.target.value)} /></label>
      {error ? <p className="aviso" role="alert">{error}</p> : null}
      {ok ? <p className="exito" role="status">{ok}</p> : null}
      <button className="boton" type="submit" disabled={cargando}>{cargando ? 'Entrando…' : 'Entrar'}</button>
      <button type="button" className="enlace-boton" onClick={async () => {
        if (!email.trim()) return setError('Escribe tu correo para recuperar la contraseña.');
        try { await sendPasswordResetEmail(fb().auth, email.trim()); setOk('Te hemos enviado un enlace para cambiar la contraseña.'); }
        catch (er) { setError(mensajeError(er)); }
      }}>He olvidado la contraseña</button>
      <p className="muted" style={{ fontSize: 14 }}>¿Aún no tienes cuenta? Créala desde la app (pestaña «Mi comparsa»). Si entraste en la app con Apple, gestiona tu cuenta desde la app.</p>
    </form>
  );
}
