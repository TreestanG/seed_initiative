import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPayload } from "payload";
import config from '@payload-config'
import Script from 'next/script'
import { OrganizationStructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
})

const baseUrl = process.env.NODE_ENV === 'production'
  ? process.env.URL!
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: {
    default: "Seed Initiative",
    template: "%s"
  },
  metadataBase: new URL(baseUrl),
  description: "Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions.",
  keywords: ["nonprofit", "education", "STEM", "academic competitions", "high school", "students", "resources"],
  authors: [{ name: "Seed Initiative Team" }],
  creator: "Seed Initiative",
  publisher: "Seed Initiative",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Seed Initiative",
    title: "Seed Initiative: Planting the seed for the next generation of STEM students",
    description: "Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions.",
    images: [
      {
        url: '/ogbanner.png',
        width: 1200,
        height: 630,
        alt: "seed-initiative-banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seed Initiative",
    description: "Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions.",
    images: ['/ogbanner.png'],
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens if you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const payload = await getPayload({ config })
  const headerResult = await payload.findGlobal({
    slug: 'header',
    depth: 1
  })

  const footerResult = await payload.findGlobal({
    slug: 'footer',
  })

  return (
    <html lang="en">
      <head>
        <Script
          src="https://stats.tristangee.com/js/script.js"
          data-domain="seedinitiative.net"
          strategy="beforeInteractive"
        />
        <OrganizationStructuredData
          name="Seed Initiative"
          url={process.env.URL || "https://seedinitiative.net"}
          logo={`${process.env.URL || "https://seedinitiative.net"}/logo.png`}
          description="Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions."
          sameAs={[
            // Add your social media URLs here
            // "https://twitter.com/seedinitiative",
            // "https://facebook.com/seedinitiative",
            // "https://instagram.com/seedinitiative",
          ]}
        />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen w-screen overflow-x-hidden`}
      >
        <Header res={headerResult} />
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Footer res={footerResult} />

      </body>

    </html>
  );
}
