export const config = {
  api: {
    externalResolver: true,
  },
};

export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.JOBS_KEY}`,
    },
  };
  fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Jobs?view=Featured`,
    options
  )
    .then((response) => response.json())
    .then((usefulData) => {
      res.json(usefulData);
    })
    .catch((e) => {
      console.error(`An error occurred: ${e}`);
    });
}
