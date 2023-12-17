/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]],
  },
};

module.exports = nextConfig;
