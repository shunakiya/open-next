import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "../fonts";

export const metadata: Metadata = {
  title: "open",
  description: "Effortless access, and unlock your world with a tap or touch.",
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
