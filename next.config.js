const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  publicRuntimeConfig: {
    contentEnv: process.env.CONTENT_ENV, // production / dev / staging, ..
  },
  images: {
    domains: [],
  },
  swcMinify: false,
};

if (process.env.CONTENT_ENV !== 'production' && process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
    openAnalyzer: false,
  });

  module.exports = (phase, defaultConfig) => {
    return withBundleAnalyzer(defaultConfig);
  };
}
