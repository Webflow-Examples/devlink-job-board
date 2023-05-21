export const config = {
  api: {
    externalResolver: true,
  },
};

export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  const { id } = req.query;
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.JOBS_KEY}`,
    },
  };
  fetch(`https://api.airtable.com/v0/appWq0aT7C7M3apm8/Jobs/${id}`, options)
    .then((response) => response.json())
    .then((usefulData) => {
      res.json(usefulData);
    })
    .catch((e) => {
      console.error(`An error occurred: ${e}`);
    });
}
