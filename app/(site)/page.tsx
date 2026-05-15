import { Brands } from "@/webflow/Brands";
import { Features } from "@/webflow/Features";
import { Hero } from "@/webflow/Hero";
import { JobListing } from "@/webflow/JobListing";
import { Pricing } from "@/webflow/Pricing";
import { PricingGrid } from "@/webflow/PricingGrid";
import { Stats } from "@/webflow/Stats";

import { Chart } from "@/components/Chart";
import { HomeCta } from "@/components/HomeCta";
import { getFeaturedJobs } from "@/lib/jobs";

export const revalidate = 300;

export default async function HomePage() {
  const jobsData = await getFeaturedJobs();

  return (
    <main>
      <Hero buttonText="Find a job" buttonLink={{ href: "#jobs" }} />
      <Brands />
      <Pricing
        employerPrice="$95"
        applicantPricing="$9"
        pricingBottom={<PricingGrid />}
      />
      <HomeCta />
      <Features />
      <Stats chart={<Chart />} />
      <section className="section" id="jobs">
        <div className="container">
          <h2 className="section-header">Featured Jobs</h2>
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
