import Head from "next/head";
import { JobListing, Navbar, Hero, Brands } from "@/devlink";
import { useState, useEffect } from "react";

export default function Jobs() {
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/job/rec4pwlXmBzjvzhea")
      .then((response) => response.json())
      .then((data) => {
        setJobsData(data);
      })
      .catch((e) => {
        setError(e);
        console.error(`An error occurred: ${error}`);
      })
      .finally(() => {
        setLoading(false);
        console.log(jobsData);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Testing</title>
        <meta name="description" content="Jobs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Newnav />
      <main>
        <Hero buttonText={"Find a job"} buttonLink={{ href: "#jobs" }} />
        <Brands />
        <section className="section" id="jobs">
          {
            <div className="container">
              {
                <div>
                  {loading && <p>Loading...</p>}
                  {jobsData && jobsData.fields && (
                    <h2>{jobsData.fields.Name}</h2>
                  )}
                </div>
              }
            </div>
          }
        </section>
      </main>
    </>
  );
}
