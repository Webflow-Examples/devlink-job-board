"use client";

import { Footer } from "@/webflow/Footer";
import { Newnav } from "@/webflow/Newnav";

function demoPostJobAlert() {
  alert("Can't post a job, this is a demo site");
}

export function SiteShell({
  year,
  children,
}: {
  year: number;
  children: React.ReactNode;
}) {
  return (
    <>
      <Newnav
        brandLink={{ href: "/" }}
        homeLink={{ href: "/" }}
        aboutLink={{ href: "/about" }}
        jobsLink={{ href: "/jobs" }}
        postJob={{ onClick: demoPostJobAlert }}
      />
      {children}
      <Footer year={year} />
    </>
  );
}
