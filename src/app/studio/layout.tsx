import { ReactNode } from "react";
import "./style.css";
import { Toaster } from "react-hot-toast";
import { poppins } from "@/src/lib/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {children} <Toaster position="top-right" containerClassName="font-poppins font-bold" reverseOrder={false} />
      </body>
    </html>
  );
}
