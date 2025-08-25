/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {},
  experimental: {
    // This setting allows cross-origin requests in development, which is necessary
    // for some development environments like the one used here.
    allowedDevOrigins: ["https://6000-firebase-studio-1748920676879.cluster-uf6urqn4lned4spwk4xorq6bpo.cloudworkstations.dev"],
  },
};

module.exports = nextConfig;
