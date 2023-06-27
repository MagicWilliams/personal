module.exports = {
  reactStrictMode: true,
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_ACCESS_TOKEN: process.env.SANITY_ACCESS_TOKEN,
    SANITY_DATASET: process.env.SANITY_DATASET,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: true,
  swcMinify: false,
};
