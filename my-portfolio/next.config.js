// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    // /Next-React-Components
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
      "/ap-highlight": { page: "/ap-highlight" },
    };
  },
  assetPrefix: !debug
    ? "https://anotherplanet-io.github.io/Next-React-Components/"
    : "",
};

// create webpack config
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    // Fixes npm packages that depend on `fs` module
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};

module.exports = withPlugins(
  [
    [withMDX],
    [withImages],
    [withFonts],
    [withCSS],
    [withSass],
    [withBundleAnalyzer],
  ],
  nextConfig
);
