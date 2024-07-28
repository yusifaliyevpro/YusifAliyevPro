import {
  Fira_Code,
  Jua,
  Poppins,
  Signika_Negative,
  Source_Sans_3,
} from "next/font/google";

export const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export const signika_negative = Signika_Negative({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const jua = Jua({ subsets: ["latin"], weight: "400" });
