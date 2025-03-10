import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../public/assets/fonts/Satoshi/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const notoserif = localFont({
  src: [
    {
      path: "../public/assets/fonts/NotoSerif/NotoSerif-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/NotoSerif/NotoSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/NotoSerif/NotoSerif-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/NotoSerif/NotoSerif-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-notoserif",
});

export const notoserifdisplay = localFont({
  src: [
    {
      path: "../public/assets/fonts/NotoSerifDisplay/NotoSerifDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/NotoSerifDisplay/NotoSerifDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/NotoSerifDisplay/NotoSerifDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/NotoSerifDisplay/NotoSerifDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-notoserifdisplay",
});
