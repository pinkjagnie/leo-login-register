/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_PB_URL: process.env.NEXT_APP_PB_URL,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
