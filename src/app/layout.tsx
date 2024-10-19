import type { Metadata } from "next";
import { Inter, Volkhov } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
});

export const metadata: Metadata = {
  title: "Jadoo - Explore the Best Destinations Around the World",
  description: "Discover amazing places for your next vacation with Jadoo. Find top destinations, flights, and hotels worldwide. Your adventure starts here!",

  // Open Graph Metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jadoo-red-six.vercel.app/",
    title: "Jadoo - Explore the Best Destinations Around the World",
    description: "Discover amazing places for your next vacation with Jadoo. Find top destinations, flights, and hotels worldwide.",
    images: [
      {
        url: "https://jadoo.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jadoo - Explore the Best Destinations Around the World",
      },
    ],
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    site: "@_mplus_", // Adjust based on your Twitter handle
    title: "Jadoo - Explore the Best Destinations Around the World",
    description: "Discover amazing places for your next vacation with Jadoo. Your adventure starts here!",
    images: [
      {
        url: "https://jadoo.app/images/og-image.png",
        alt: "Jadoo - Explore the Best Destinations Around the World",
      },
    ],
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Ensure to upload the appropriate icons
  },

  // Canonical URL to avoid duplicate content
  alternates: {
    canonical: "https://jadoo-red-six.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${volkhov.variable}`}>
      <head>
        {/* Add additional SEO elements */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
