import type { NextConfig } from 'next';

// Exportación estática: `npm run build` deja la web en out/, lista para Vercel o cualquier hosting.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
