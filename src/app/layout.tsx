'use client';

import { DM_Sans } from "next/font/google";
import "@styles/globals.css";
import HeaderNav from "@/components/HeaderNav/HeaderNav";
import { usePathname } from "next/navigation";
import { HeaderNavProvider } from "@/context/HeaderNavContext";

const dm_sans = DM_Sans({ subsets: ["latin"] , display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  return (
    <HeaderNavProvider>
      <html lang="es">
        <body className={`${dm_sans.className} flex justify-center flex-col h-full w-full px-8 md:px-16 lg:px-32 xl:px-52 2xl:px-72 3xl:px-80 relative`}>
          {pathname !== '/' && <HeaderNav fixedTop />}
          <div className="mt-32 mb-8 h-full">
            {children}
          </div>
        </body>
      </html>
    </HeaderNavProvider>
  );
}
