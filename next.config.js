/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_PB_URL: process.env.NEXT_APP_PB_URL,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["127.0.0.1"],
  },
};

module.exports = nextConfig;
