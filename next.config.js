/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // image origins
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  }
}

module.exports = nextConfig
