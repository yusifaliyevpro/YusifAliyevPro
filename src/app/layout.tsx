import "./globals.css";
import { Providers } from "../components/Providers";
import { cn } from "../lib/cn";
import { jua, poppins, source_sans_3 } from "../lib/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body
        className={cn(
          "font-poppins min-h-svh scroll-smooth bg-white font-semibold",
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
