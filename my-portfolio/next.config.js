/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "443",
        pathname: "/**/*",
      },
    ],
  },
};

module.exports = () => {
  // Run the base config through any configured plugins
  return Object.values(plugins).reduce(
    (acc, plugin) => plugin(acc),
    nextConfig
  );
};
