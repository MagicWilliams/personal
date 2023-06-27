import { createClient } from 'next-sanity';
import { getFileAsset } from '@sanity/asset-utils';

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2022-07-22',
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: false,
};

const client = createClient(config);

export const videoAssetFor = source => {
  return getFileAsset(source, client.config());
};
