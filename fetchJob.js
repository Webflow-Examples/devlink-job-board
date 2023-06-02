export async function fetchJob(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.JOBS_KEY}`,
    },
  };

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Jobs/${id}`,
      options
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(`An error occurred: ${e}`);
    throw e;
  }
}
