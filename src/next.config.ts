// src/next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // CORRECTED: Moved allowedDevOrigins to the top level of the config object.
  // The 'experimental' wrapper is not needed for this key.
  experimental: {
    allowedDevOrigins: ["https://6000-firebase-studio-1748920676879.cluster-uf6urqn4lned4spwk4xorq6bpo.cloudworkstations.dev"]
  },
};

export default nextConfig;
