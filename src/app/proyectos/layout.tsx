'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProyectosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  return (
    <>
      {children}
      {pathname !== '/proyectos' && <div className="flex justify-center w-full mt-4">
        <Link href="/proyectos">
          <button className="bg-white/80 hover:bg-white text-black px-11 py-2 rounded-lg text-[0.5rem] md:text-xs lg:text-sm xl:text-lg font-medium flex justify-center items-center">
            Ver más proyectos
          </button>
        </Link>
      </div>
      }
    </>
  );
}
