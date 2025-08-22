// next.config.ts
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
  experimental: {
    // Add the development environment's origin to allow cross-origin requests.
    // This is necessary for the embedded preview to work correctly with Next.js.
    allowedDevOrigins: ["https://6000-firebase-studio-1748920676879.cluster-uf6urqn4lned4spwk4xorq6bpo.cloudworkstations.dev"]
  },
};

export default nextConfig;
