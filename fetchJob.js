export async function fetchJob(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.JOBS_KEY}`,
    },
  };

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/appWq0aT7C7M3apm8/Jobs/${id}`,
      options
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(`An error occurred: ${e}`);
    throw e;
  }
}
