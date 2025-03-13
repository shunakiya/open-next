import type { Metadata, Viewport } from "next";
import "./globals.css";
import { satoshi } from "../fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "open",
  description: "Effortless access, and unlock your world with a tap or touch.",
  keywords: "lock, smart lock, fingerprint, nfc, cse5408, cse5208, salsnb",
  authors: [{ name: "Shun Akiya, Christopher Cao, Rafael Ceja, Matthew Uy" }],
  creator: "Shun Akiya",
  publisher: "Shun Akiya",
  openGraph: {
    title: "open",
    description:
      "Effortless access, and unlock your world with a tap or touch.",
    url: "https://un-lock.vercel.app",
    siteName: "open",
    images: [
      {
        url: "https://un-lock.vercel.app/assets/images/logo_preview.png",
        width: 761,
        height: 400,
        alt: "open App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "open",
    description:
      "Effortless access, and unlock your world with a tap or touch.",
    images: ["https://un-lock.vercel.app/assets/images/logo_preview.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>{children}</body>
    </html>
  );
}
