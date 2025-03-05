import localFont from "next/font/local";

export const sfPro = localFont({
  src: [
    {
      path: "../public/assets/fonts/SF-Pro-Text-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Text-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Text-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Text-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Text-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Text-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/SF-Pro-Text-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf",
});
