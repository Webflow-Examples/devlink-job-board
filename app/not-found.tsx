import Link from "next/link";

import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  const year = new Date().getFullYear();
  return (
    <SiteShell year={year}>
      <main className="section">
        <div className="container">
          <h1 className="section-header">Page not found</h1>
          <p>
            <Link href="/">Return home</Link>
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
