import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Details } from "@/webflow/Details";
import { PageHeading } from "@/webflow/PageHeading";

import { getJobById } from "@/lib/jobs";

export const revalidate = 300;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) {
    return { title: "Job not found" };
  }
  const name = job.fields.Name ?? "Job";
  const company = job.fields.Company ?? "";
  return {
    title: `${name} at ${company}`,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) {
    notFound();
  }

  return (
    <main>
      <PageHeading headingText={job.fields.Name ?? ""} />
      <Details
        company={job.fields.Company}
        location={job.fields.Location}
        category={job.fields.Category}
        description={job.fields.Description}
        benefits={job.fields.Benefits}
        applyText="Apply now"
        applyLink={{
          href: job.fields["Apply Link"] ?? "#",
          target: "_blank",
        }}
      />
    </main>
  );
}
