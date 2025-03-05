import type { Metadata } from "next";
import "./globals.css";
import { sfPro } from "../fonts";

export const metadata: Metadata = {
  title: "open | Effortless Access",
  description: "Effortless access, and unlock your world with a tap or touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sfPro.variable}>
      <body>{children}</body>
    </html>
  );
}
