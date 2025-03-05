import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "../public/assets/fonts/Helvetica-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Helvetica-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Helvetica-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/Helvetica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});
