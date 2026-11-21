// Datos y utilidades compartidas entre la web y la app de En Comparsa.
// Este archivo es la fuente: `npm run sync` lo copia a web/src/shared y app/src/shared.
import fiestasJson from './data/fiestas.json';
import actosJson from './data/actos.json';
import ordenJson from './data/orden.json';
import fuentesJson from './data/fuentes.json';

export type Bando = 'cristiano' | 'moro';
export type Polvora = 'si' | 'no' | 'desconocido';
export type TipoActo =
  | 'Entrada' | 'Embajada' | 'Alardo/Arcabucería' | 'Pólvora/Castillo' | 'Procesión' | 'Religioso'
  | 'Diana' | 'Retreta' | 'Desfile' | 'Infantil' | 'Música' | 'Otro';

export interface Fiesta {
  slug: string; nombre: string; provincia: string; fechasTexto: string;
  inicio: string; fin: string; mes: string; prioridad: string;
  organizador: string; enHonorA: string; declaracion: string; web: string;
  fuente: string; notas: string; tienePrograma: boolean;
}
export interface Acto {
  id: string; fiesta: string; fecha: string; hora: string | null; nombre: string; tipo: TipoActo;
  lugar: string | null; recorrido: string | null; polvora: Polvora; nota: string | null; anyo: number;
  /** Lo rellena la junta desde la app cuando cambia algo. */
  cancelado?: boolean; cambio?: string | null;
}
export interface OrdenItem {
  fiesta: string; desfile: string; fecha: string; orden: number | null; comparsa: string;
  bando: Bando; cargo: string | null; nota: string | null;
}
export interface Fuente { fiesta: string; titulo: string; url: string; aporta: string }

export const fiestas = [...(fiestasJson as Fiesta[])];
export const actos = [...(actosJson as Acto[])];
export const orden = ordenJson as OrdenItem[];
export const fuentes = fuentesJson as Fuente[];

/** Sustituye el catálogo por uno más reciente (p. ej. el de Firestore). Las funciones de abajo leen siempre estos arrays. */
export function reemplazarCatalogo(nuevo: { fiestas?: Fiesta[]; actos?: Acto[] }) {
  if (nuevo.fiestas?.length) fiestas.splice(0, fiestas.length, ...nuevo.fiestas);
  if (nuevo.actos?.length) actos.splice(0, actos.length, ...nuevo.actos);
}
export const TIPOS_ACTO: TipoActo[] = ['Entrada', 'Embajada', 'Alardo/Arcabucería', 'Pólvora/Castillo', 'Procesión', 'Religioso',
  'Diana', 'Retreta', 'Desfile', 'Infantil', 'Música', 'Otro'];

export const PROVINCIAS_PRINCIPALES = ['Alicante', 'Valencia', 'Murcia'];
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const MESES_C = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const DIAS_C = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

// Fechas como cadenas AAAA-MM-DD, siempre en UTC para no depender de la zona horaria.
export const d = (iso: string) => new Date(iso + 'T00:00:00Z');
export const iso = (x: Date) => x.toISOString().slice(0, 10);
export const hoyIso = (now = new Date()) =>
  `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
const addYears = (s: string, n: number) => `${Number(s.slice(0, 4)) + n}${s.slice(4)}`;

export function diasEntre(a: string, b: string) {
  return Math.round((d(b).getTime() - d(a).getTime()) / 86400000);
}

export interface Edicion { inicio: string; fin: string; aproximada: boolean; anyoReferencia: number }
/** Próxima edición: la de referencia si aún no ha terminado; si ya pasó, la misma fecha en el año siguiente, marcada como aproximada. */
export function proximaEdicion(f: Fiesta, hoy = hoyIso()): Edicion {
  let n = 0;
  while (addYears(f.fin, n) < hoy) n++;
  return { inicio: addYears(f.inicio, n), fin: addYears(f.fin, n), aproximada: n > 0, anyoReferencia: Number(f.fin.slice(0, 4)) };
}

export function rango(inicio: string, fin: string) {
  const a = d(inicio), b = d(fin);
  const ma = MESES_C[a.getUTCMonth()], mb = MESES_C[b.getUTCMonth()];
  if (inicio === fin) return `${a.getUTCDate()} ${ma}`;
  return ma === mb ? `${a.getUTCDate()}–${b.getUTCDate()} ${mb}` : `${a.getUTCDate()} ${ma}–${b.getUTCDate()} ${mb}`;
}
export const diasCorto = (inicio: string, fin: string) => {
  const a = d(inicio), b = d(fin);
  return inicio === fin ? `${a.getUTCDate()}` : `${a.getUTCDate()}–${b.getUTCDate()}`;
};
export const mesCorto = (s: string) => MESES_C[d(s).getUTCMonth()].toUpperCase();
/** «ABR» o «ABR–MAY» si la fiesta cruza de mes. */
export const mesesCorto = (inicio: string, fin: string) =>
  mesCorto(inicio) === mesCorto(fin) ? mesCorto(inicio) : `${mesCorto(inicio)}–${mesCorto(fin)}`;
export const mesLargo = (s: string) => MESES[d(s).getUTCMonth()];
export const diaSemana = (s: string) => DIAS[d(s).getUTCDay()];
export const diaSemanaCorto = (s: string) => DIAS_C[d(s).getUTCDay()];
export const diaMes = (s: string) => d(s).getUTCDate();
export const fechaLarga = (s: string) => `${diaSemana(s)} ${diaMes(s)} de ${mesLargo(s)}`;
export const mayuscula = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const fechaLargaAnyo = (s: string) => `${fechaLarga(s)} de ${s.slice(0, 4)}`;

export const fiesta = (slug: string) => fiestas.find((f) => f.slug === slug);
export const acto = (id: string) => actos.find((a) => a.id === id);
export const actosDe = (slug: string) =>
  actos.filter((a) => a.fiesta === slug).sort((x, y) => (x.fecha + (x.hora ?? '99')).localeCompare(y.fecha + (y.hora ?? '99')));
export const diasDe = (slug: string) => [...new Set(actosDe(slug).map((a) => a.fecha))];
export const fuentesDe = (slug: string) => fuentes.filter((f) => f.fiesta === slug);

export function desfilesDe(slug: string) {
  const out: { nombre: string; fecha: string; nota: string | null; comparsas: OrdenItem[] }[] = [];
  for (const o of orden.filter((x) => x.fiesta === slug)) {
    let g = out.find((x) => x.nombre === o.desfile);
    if (!g) { g = { nombre: o.desfile, fecha: o.fecha, nota: o.nota, comparsas: [] }; out.push(g); }
    g.comparsas.push(o);
  }
  return out;
}
export function comparsasDe(slug: string) {
  const m = new Map<string, Bando>();
  for (const o of orden.filter((x) => x.fiesta === slug)) if (!m.has(o.comparsa)) m.set(o.comparsa, o.bando);
  return [...m].map(([nombre, bando]) => ({ nombre, bando }));
}

/** Fiestas ordenadas por su próxima edición. */
export function proximas(hoy = hoyIso()) {
  return fiestas
    .map((f) => ({ f, e: proximaEdicion(f, hoy) }))
    .sort((a, b) => a.e.inicio.localeCompare(b.e.inicio) || a.f.nombre.localeCompare(b.f.nombre));
}
/** Agrupa por mes de la próxima edición, empezando por el mes actual. */
export function porMes(hoy = hoyIso(), filtro: (f: Fiesta) => boolean = () => true) {
  const grupos: { clave: string; titulo: string; items: { f: Fiesta; e: Edicion }[] }[] = [];
  for (const it of proximas(hoy).filter((x) => filtro(x.f))) {
    const clave = it.e.inicio.slice(0, 7);
    let g = grupos.find((x) => x.clave === clave);
    if (!g) { g = { clave, titulo: `${mesLargo(it.e.inicio)} ${clave.slice(0, 4)}`, items: [] }; grupos.push(g); }
    g.items.push(it);
  }
  return grupos;
}
export const provincias = () => [...new Set(fiestas.map((f) => f.provincia))].sort();
export const filtroProvincia = (p: string) => (f: Fiesta) =>
  p === 'Todas' ? true : p === 'Otras' ? !PROVINCIAS_PRINCIPALES.includes(f.provincia) : f.provincia === p;

export const ETIQUETA_POLVORA: Record<Polvora, string> = { si: 'Con pólvora', no: 'Sin pólvora', desconocido: 'Pólvora: no consta' };
