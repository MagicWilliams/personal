module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    SANITY_ACCESS_TOKEN: process.env.SANITY_ACCESS_TOKEN,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: true,
  swcMinify: false,
};
