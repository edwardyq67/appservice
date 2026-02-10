import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: "./src/image-loader.ts" // Asegúrate de que este archivo exista
  },
  // outputFileTracing: false, // ← REMOVE esta línea
  // En su lugar, si necesitas configurar tracing:
  // outputFileTracingRoot: process.cwd(),
  
  // Si estás usando OpenNext o desplegando en Cloudflare:
  output: "standalone", // ← AGREGAR esto si usas Cloudflare
  
  async rewrites() {
    return [
      {
        source: '/api/contacto/send',
        destination: 'https://email.teknis-developer.com/send_mail.php',
      },
      {
        source: '/api/reclamos/send',
        destination: 'https://email.teknis-developer.com/send_reclamo.php',
      },
    ];
  },
};

export default nextConfig;