import Head from 'next/head';
import { JobListing, Newnav, Hero, Brands, Pricing, Features, Footer, PricingGrid, Cta } from '@/devlink'
import { useState, useEffect } from 'react';

export default function Jobs() {
  const copyYear = new Date().getFullYear();
  const [jobsData, setJobsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {

  fetch('api/jobs/featured')
  .then((response) => response.json())
  .then((data) => {
    setJobsData(data.records);
  })
  .catch((e) => {
    setError(e);
    console.error(`An error occurred: ${error}`);
  }).finally(() => {
    setLoading(false);
  });
}, []);
    return (
      <>
        <Head>
            <title>Visual Development Jobs</title>
            <meta name="description" content="Jobs" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Newnav 
          brandLink={{ href: "/" }}
          homeLink={{href: "/"}}
          aboutLink={{href: "/about"}}
          jobsLink={{href: "/jobs"}}
          postJob={{onClick: function() {alert("Can't post a job, this is a demo site")}}}
        />
        <main>
            <Hero 
                buttonText={"Find a job"}
                buttonLink={{href: '#jobs'}}
            />
            <Brands />
            <Pricing 
              employerPrice={"$95"}
              applicantPricing={"$9"}
              pricingBottom={ <PricingGrid /> }
            />
            <Cta 
              headingText={"Ready to get started?"}
              button={{onClick: function() {alert("Can't post a job, this is a demo site")}}}
            />
            <Features />
            <section className='section' id='jobs'>
                <div className="container">
                <h2 className="section-header">Featured Jobs</h2>
                <ul>
                { jobsData.map((job) => {
                    return <li key={job.id} role="listitem"><JobListing 
                            companyName={job.fields.Company} 
                            listingName={job.fields.Name}  
                            location={job.fields.Location}
                            applyText={"Apply now"}
                            applyLink={{href: job.fields['Apply Link'], target: '_blank'}}
                            learnText={"Learn more"}
                            learnLink={{href: "/jobs/" + job.id}}
                        /></li>
                })}
                </ul>
                </div>
            </section>
        </main>
        <Footer 
          year={copyYear}
        />
      </>
    )
}