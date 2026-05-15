import { JobListing } from "@/webflow/JobListing";
import { PageHeading } from "@/webflow/PageHeading";

import { getAllJobs } from "@/lib/jobs";

export const revalidate = 300;

export default async function JobsPage() {
  const jobsData = await getAllJobs();

  return (
    <main>
      <PageHeading headingText="Jobs" />
      <section className="section" id="jobs">
        <div className="container">
          <ul>
            {jobsData.map((job) => (
              <li key={job.id} role="listitem">
                <JobListing
                  companyName={job.fields.Company ?? ""}
                  listingName={job.fields.Name ?? ""}
                  location={job.fields.Location ?? ""}
                  applyText="Apply now"
                  applyLink={{
                    href: job.fields["Apply Link"] ?? "#",
                    target: "_blank",
                  }}
                  learnText="Learn more"
                  learnLink={{ href: `/jobs/${job.id}` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
