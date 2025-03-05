import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "../public/assets/fonts/Helvetica/Helvetica-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Helvetica/Helvetica-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Helvetica/Helvetica-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/Helvetica/Helvetica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});
