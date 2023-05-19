import Head from 'next/head';
import { Newnav, AboutHero, AboutInformation, Footer } from '@/devlink'
import { useState, useEffect } from 'react';

export default function Jobs() {
  const copyYear = new Date().getFullYear();
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
        <Newnav 
          brandLink={{ href: "/" }}
          homeLink={{href: "/"}}
          aboutLink={{href: "/about"}}
          jobsLink={{href: "/jobs"}}
          postJob={{onClick: function() {alert("Can't post a job, this is a demo site")}}}
        />
        <main>
            <AboutHero />
            <AboutInformation />
        </main>
        <Footer
          year={copyYear}
          />
      </>
    )
}