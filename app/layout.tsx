import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";


export const metadata: Metadata = {
  title: "Ajith PG | Front End Engineer",
  description: "Product-driven Front-End Engineer with 5+ years of experience building scalable, high-performance web applications using React, Next.js, and TypeScript.",
  keywords: ["Front End Engineer", "React Developer", "Ajith PG", "Portfolio", "Web Developer"],
  authors: [{ name: "Ajith PG" }],
  openGraph: {
    title: "Ajith PG | Front End Engineer",
    description: "Product-driven Front-End Engineer with 5+ years of experience building scalable, high-performance web applications.",
    url: "https://ajith-portfolio.vercel.app",
    siteName: "Ajith PG Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajith PG | Front End Engineer",
    description: "Portfolio of a Product-driven Front-End Engineer specialized in React and Next.js.",
  },
  appleWebApp: {
    title: "Ajith",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-gray-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-background transition-colors duration-500">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}



