import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLdScript } from "@/components/JsonLdScript";
import { siteDetails } from "@/data/siteDetails";
import { Toaster } from "@/components/ui/sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ovanthra - Professional Design & Web Services",
  description:
    "Expert designers and developers ready to complete your projects. From logo design to website development, we create stunning visuals and powerful digital solutions.",
  keywords: "design, web development, landing pages, professional services",
  authors: [{ name: "Ovanthra" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ovanthra.com",
    title: "Ovanthra - Professional Design & Web Services",
    description:
      "Expert designers and developers ready to complete your projects.",
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
        {children}
        <Toaster />

        <JsonLdScript
          data={{
            "@context": "https://ovanthra.com",
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
