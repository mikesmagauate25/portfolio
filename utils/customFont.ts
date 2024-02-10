import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "../assets/fonts/Helvetica/Helvetica CE Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Helvetica/Helvetica CE Bold Narrow.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Helvetica/Helvetica Black Condensed.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});
