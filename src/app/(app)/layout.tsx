import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPayload } from "payload";
import config from '@payload-config'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin']
})

const baseUrl = process.env.NODE_ENV === 'production'
  ? process.env.URL!
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Seed Initiative",
  metadataBase: new URL(baseUrl),
  description: "Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.URL!,
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
  }
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
