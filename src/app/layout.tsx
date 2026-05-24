import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const heading = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Df-OS | Digital Factory Operating System",
    template: "%s | Df-OS",
  },
  description:
    "A process-first, modular Digital Factory Operating System that digitizes people-driven shopfloor workflows and connects operational execution, visibility, compliance, and decision intelligence across manufacturing plants.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dfos.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Df-OS | Digital Factory Operating System",
    description:
      "A process-first, modular Digital Factory Operating System that digitizes people-driven shopfloor workflows.",
    url: "/",
    siteName: "Df-OS",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${heading.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-neutral-950 text-neutral-100">
        {children}
      </body>
    </html>
  );
}

