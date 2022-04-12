// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  let projects, links;
  // Process a GET request
  const getEntries = await Promise.all([
    await client.getEntries({ content_type: "project" }).then((res) => {
      projects = [...res.items].sort(() => (Math.random() > 0.5 ? 1 : -1));
    }),
    await client.getEntries({ content_type: "links" }).then((res) => {
      links = [...res.items];
    }),
  ]);

  res.status(200).json({ projects, links });
}
