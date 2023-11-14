/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // http://localhost:3000/admin/hero-section
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost:3000",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
