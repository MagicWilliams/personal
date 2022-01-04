// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  let data;
  // Process a GET request
  const getEntries = await Promise.all([
    await client.getEntries().then((res) => {
      data = [...res.items];
    })
  ]);

  res.status(200).json({ data });
}
