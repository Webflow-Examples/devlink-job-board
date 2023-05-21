import Head from 'next/head';
import { Newnav, AboutHero, AboutInformation, Footer } from '@/devlink'

export default function Jobs() {
  const copyYear = new Date().getFullYear();
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