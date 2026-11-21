'use client';
import { useEffect, useState } from 'react';
import { hoyIso } from '@/shared';

/** La web es estática: arranca con la fecha de compilación y se corrige con la del visitante al montar. */
export function useHoy(hoyBuild: string) {
  const [hoy, setHoy] = useState(hoyBuild);
  useEffect(() => setHoy(hoyIso()), []);
  return hoy;
}
