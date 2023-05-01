import Head from 'next/head';
import { JobListing, Newnav, Hero, Brands } from '@/devlink'
import { useState, useEffect } from 'react';

export default function Jobs() {
  const [jobsData, setJobsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {

  fetch('http://localhost:8000/jobs')
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
        <Newnav />
        <main>
            <Hero 
                buttonText={"Find a job"}
                buttonLink={{href: '#jobs'}}
            />
            <Brands />
            <section className='section' id='jobs'>
                <div className="container">
                { jobsData.map((job) => {
                    return <JobListing
                            key={job.id} 
                            companyName={job.fields.Company} 
                            listingName={job.fields.Name}  
                            location={job.fields.Location}
                            applyText={"Apply now"}
                            applyLink={{href: job.fields['Apply Link'], target: '_blank'}}
                            learnText={"Learn more"}
                            learnLink={{href: "/jobs/" + job.id}}
                        />
                })}
                    
                </div>
            </section>
        </main>
      </>
    )
}