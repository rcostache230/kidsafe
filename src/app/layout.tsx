import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { BrandLogo, BrandMark } from "@/components/brand";
import { Footer } from "@/components/footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="page-shell flex items-center gap-3 py-5">
              <Link
                href="/"
                className="inline-flex items-center sm:hidden"
                aria-label="Digital Parents"
              >
                <BrandMark />
              </Link>
              <div className="hidden sm:block">
                <BrandLogo />
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
