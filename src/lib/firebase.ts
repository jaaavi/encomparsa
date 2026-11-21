'use client';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions, httpsCallable } from 'firebase/functions';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export const firebaseDisponible = !!(config.apiKey && config.projectId && config.appId);

let listo = false;
export function fb() {
  const app = getApps().length ? getApp() : initializeApp(config);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const fns = getFunctions(app, 'europe-west1');
  if (!listo && process.env.NEXT_PUBLIC_EMULADORES === '1') {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
    connectFunctionsEmulator(fns, '127.0.0.1', 5001);
  }
  listo = true;
  auth.languageCode = 'es';
  return { auth, db, llamar: <T,>(n: string, d: Record<string, unknown> = {}) => httpsCallable(fns, n)(d).then((r) => r.data as T) };
}

export function mensajeError(e: unknown) {
  const code = (e as { code?: string })?.code ?? '';
  const m: Record<string, string> = {
    'auth/invalid-credential': 'Correo o contraseña incorrectos.',
    'auth/invalid-email': 'El correo no es válido.',
    'auth/too-many-requests': 'Demasiados intentos. Espera unos minutos.',
    'auth/network-request-failed': 'Sin conexión.',
  };
  if (m[code]) return m[code];
  if (code === 'functions/internal' || code === 'functions/unavailable') return 'El servicio no responde ahora mismo. Inténtalo en unos minutos.';
  if (code.startsWith('functions/')) return (e as Error).message;
  return 'No se pudo completar. Inténtalo de nuevo.';
}
