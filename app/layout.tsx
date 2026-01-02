import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLdScript } from "@/components/JsonLdScript";
import { siteDetails } from "@/data/siteDetails";
import { Toaster } from "@/components/ui/sonner";
import SmoothScroll from "@/components/ui/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: "AI automation, intelligent learning, workflow automation, AI platform, business automation, OneLearn, enterprise AI",
  authors: [{ name: "Ovanthra" }],
  openGraph: {
    type: "website",
    locale: siteDetails.locale,
    url: siteDetails.siteUrl,
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />

        <JsonLdScript
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteDetails.siteName,
            url: siteDetails.siteUrl,
            logo: siteDetails.siteLogo,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9749571885",
              contactType: "customer service",
            },
          }}
        />
      </body>
    </html>
  );
}
