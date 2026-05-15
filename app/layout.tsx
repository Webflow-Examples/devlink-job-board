import type { Metadata } from "next";

import "@/styles/globals.css";
import "@/webflow/css/global.css";

import { DevLinkProvider } from "@/webflow/DevLinkProvider";
import { DevLinkFontTags } from "@/webflow/webflow_modules/DevLinkFontTags";

export const metadata: Metadata = {
  title: {
    default: "Visual Development Jobs",
    template: "%s | Visual Development Jobs",
  },
  description: "Jobs",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <DevLinkFontTags />
      </head>
      <body>
        <DevLinkProvider>{children}</DevLinkProvider>
      </body>
    </html>
  );
}
