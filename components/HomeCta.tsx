"use client";

import { Cta } from "@/webflow/Cta";

export function HomeCta() {
  return (
    <Cta
      headingText="Ready to get started?"
      button={{
        onClick: () => alert("Can't post a job, this is a demo site"),
      }}
    />
  );
}
