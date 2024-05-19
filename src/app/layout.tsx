import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@styles/globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lynn's Portfolio",
  description: "Graphic designer based in Spain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
