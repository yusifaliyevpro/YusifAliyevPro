import "@/lib/env";
import { Providers } from "@/components/Providers";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
