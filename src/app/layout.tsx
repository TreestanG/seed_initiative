import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Seed Initiative",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen w-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
