import { createClient } from 'next-sanity';
import { getFileAsset } from '@sanity/asset-utils';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
  useCdn: false,
};

const client = createClient(config);

export const videoAssetFor = source => {
  return getFileAsset(source, client.config());
};
