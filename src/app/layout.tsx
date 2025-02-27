import { Providers } from "../components/Providers";
import { cn } from "../lib/cn";
import { poppins, jua, source_sans_3 } from "../lib/fonts";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body
        className={cn(
          "min-h-svh scroll-smooth bg-white font-poppins font-semibold",
          poppins.variable,
          jua.variable,
          source_sans_3.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
