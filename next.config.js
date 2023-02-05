const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  publicRuntimeConfig: {
    contentEnv: process.env.CONTENT_ENV, // production / dev / staging, ..
  },
  images: {
    domains: [
      'cdn.stage.universum.renomia.cz',
      'fe-source2.suri.cz',
      'fe-source2.povinne-ruceni.com',
      'fe-source2.srovnator.cz',
      'qr.stage.inovis.renomia.cz',
      'qr.inovis.renomia.cz',
    ],
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
