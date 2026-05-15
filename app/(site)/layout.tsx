import { SiteShell } from "@/components/SiteShell";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return <SiteShell year={year}>{children}</SiteShell>;
}
