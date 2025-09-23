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

export const metadata: Metadata = {
  title: "Campus Climbing | 佐敦抱石",
  description:
    "Campus Climbing — 佐敦抱石 bouldering gym in Jordan, Hong Kong. Memberships, classes, and community events.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Campus Climbing | 佐敦抱石",
    description:
      "Bouldering gym in Jordan. Memberships, classes, and community events.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Climbing | 佐敦抱石",
    description:
      "Bouldering gym in Jordan. Memberships, classes, and community events.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
