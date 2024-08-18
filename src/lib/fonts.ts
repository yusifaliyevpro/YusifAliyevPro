import {
  Jua,
  Poppins,
  Signika_Negative,
  Source_Sans_3,
} from "next/font/google";

export const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const signika_negative = Signika_Negative({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-signika",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const jua = Jua({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-jua",
});
