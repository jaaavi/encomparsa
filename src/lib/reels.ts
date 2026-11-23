// Reels de leyendas de cada fiesta. Para añadir uno: el vídeo (720×1280) y su portada (540×960) en public/reels/ y una línea aquí.
export interface Reel { id: string; fiesta: string; pueblo: string; titulo: string; segundos: number }

export const REELS: Reel[] = [
  { id: 'armengola', fiesta: 'orihuela', pueblo: 'Orihuela', titulo: 'La niñera que tomó un castillo', segundos: 63 },
  { id: 'font-de-la-figuera', fiesta: 'la-font-de-la-figuera', pueblo: 'La Font de la Figuera', titulo: 'El pueblo con un tercer bando', segundos: 54 },
  { id: 'monforte-del-cid', fiesta: 'monforte-del-cid', pueblo: 'Monforte del Cid', titulo: '«Del Cid»… pero no por el Cid', segundos: 58 },
  { id: 'valverde-de-jucar', fiesta: 'valverde-de-jucar', pueblo: 'Valverde de Júcar', titulo: 'Los moros que se llevan al Niño', segundos: 56 },
];
export const reelDe = (fiesta: string) => REELS.find((r) => r.fiesta === fiesta);
