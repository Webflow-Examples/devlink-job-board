import Head from "next/head";
import { PageHeading, Newnav, Details, Footer } from "@/devlink";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/jobs");
  const data = await res.json();

  const paths = data.records.map((job) => {
    return {
      params: { id: job.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:8000/jobs/${id}`);
  const data = await res.json();

  return {
    props: { job: data },
  };
};

export default function Jobs({ job }) {
  const copyYear = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>
          {job.fields.Name} at {job.fields.Company}
        </title>
        <meta name="description" content="Jobs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Newnav
        brandLink={{ href: "/" }}
        homeLink={{ href: "/" }}
        aboutLink={{ href: "/about" }}
        jobsLink={{ href: "/jobs" }}
        postJob={{
          onClick: function () {
            alert("Can't post a job, this is a demo site");
          },
        }}
      />
      <main>
        <PageHeading headingText={job.fields.Name} />
        <Details
          company={job.fields.Company}
          location={job.fields.Location}
          category={job.fields.Category}
          description={job.fields.Description}
          benefits={job.fields.Benefits}
          applyText={"Apply now"}
          applyLink={{ href: job.fields["Apply Link"], target: "_blank" }}
        />
      </main>
      <Footer year={copyYear} />
    </>
  );
}
