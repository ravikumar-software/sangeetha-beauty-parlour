/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // REQUIRED for static export
  },
};

module.exports = nextConfig;
