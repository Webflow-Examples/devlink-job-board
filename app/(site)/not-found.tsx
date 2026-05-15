import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="section-header">Page not found</h1>
        <p>
          <Link href="/">Return home</Link>
        </p>
      </div>
    </main>
  );
}
