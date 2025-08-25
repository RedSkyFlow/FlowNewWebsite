/** @type {import('next').NextConfig} */
const nextConfig = {
  // CORRECTED: The images block is now empty, as local images from the public
  // directory do not require any remotePatterns configuration. This resolves
  // the issue where local images were not being served.
  images: {},
};

module.exports = nextConfig;
