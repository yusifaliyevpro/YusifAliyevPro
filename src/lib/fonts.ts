import { Jua, Poppins, Signika_Negative, Source_Sans_3 } from "next/font/google";

export const source_sans_3 = Source_Sans_3({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
});

export const signika_negative = Signika_Negative({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-signika",
});

export const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const jua = Jua({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-jua",
  weight: "400",
});
