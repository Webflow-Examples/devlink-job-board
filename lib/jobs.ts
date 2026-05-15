const REVALIDATE_SECONDS = 300;

const fetchOptions = {
  next: { revalidate: REVALIDATE_SECONDS },
} as const;

type AuthContext = { headers: HeadersInit; baseId: string };

function getAuthContext(): AuthContext | null {
  const token = process.env.JOBS_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!token || !baseId) {
    console.warn("Missing JOBS_KEY or AIRTABLE_BASE_ID — job data unavailable.");
    return null;
  }
  return {
    baseId,
    headers: { Authorization: `Bearer ${token}` },
  };
}

function jobsTableUrl(baseId: string, path: string): string {
  return `https://api.airtable.com/v0/${baseId}/Jobs${path}`;
}

/** Fields used by the job-board UI (Airtable column names). */
export type JobFields = {
  Company?: string;
  Name?: string;
  Location?: string;
  Category?: string;
  Description?: string;
  Benefits?: string;
  "Apply Link"?: string;
};

export type JobRecord = {
  id: string;
  fields: JobFields;
};

type AirtableListResponse = {
  records?: JobRecord[];
  error?: string;
};

type AirtableSingleResponse = JobRecord & {
  error?: string;
};

export async function getFeaturedJobs(): Promise<JobRecord[]> {
  const ctx = getAuthContext();
  if (!ctx) return [];

  const res = await fetch(
    jobsTableUrl(ctx.baseId, "?view=Featured"),
    {
      headers: ctx.headers,
      ...fetchOptions,
    }
  );
  const data = (await res.json()) as AirtableListResponse;
  if (!res.ok || data.error) {
    console.error("getFeaturedJobs failed", res.status, data);
    return [];
  }
  return data.records ?? [];
}

export async function getAllJobs(): Promise<JobRecord[]> {
  const ctx = getAuthContext();
  if (!ctx) return [];

  const res = await fetch(
    jobsTableUrl(ctx.baseId, "?view=Grid%20view"),
    {
      headers: ctx.headers,
      ...fetchOptions,
    }
  );
  const data = (await res.json()) as AirtableListResponse;
  if (!res.ok || data.error) {
    console.error("getAllJobs failed", res.status, data);
    return [];
  }
  return data.records ?? [];
}

export async function getJobById(id: string): Promise<JobRecord | null> {
  const ctx = getAuthContext();
  if (!ctx) return null;

  const res = await fetch(jobsTableUrl(ctx.baseId, `/${id}`), {
    headers: ctx.headers,
    ...fetchOptions,
  });
  const data = (await res.json()) as AirtableSingleResponse;
  if (!res.ok || data.error || !data.fields) {
    return null;
  }
  return { id: data.id ?? id, fields: data.fields };
}
