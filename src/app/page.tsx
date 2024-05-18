"use client";

import { useState } from "react";

const Home = () => {
  
  return (
    <>
      <video autoPlay muted loop className="background-video">
        <source src="/home_video.webm" type="video/webm" />
      </video>
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <header className="relative z-10 text-center bg-white/80 px-2 py-2 rounded-lg gap-x-6 flex items-center h-12">
          <div className="w-32 relative flex gap-x-4 h-full">
            <div className="w-16 hover:w-full bg-black hover:bg-black rounded-lg text-[8px] flex justify-center items-center transition-header h-full">
              <button
                type="button"
                className="bg-black/80 w-full h-full hover:opacity-0 hover:invisible rounded-lg">Explorar</button>
              <nav className="bg-black transition-header w-full opacity-0 hover:opacity-100 hover:visible absolute inset-0 hover:z-20 h-full flex items-center justify-center rounded-lg">
                <a href="/proyectos" className="w-full h-full justify-center flex items-center">Proyectos</a>
                <a href="/sobre-mi" className="w-full h-full justify-center flex items-center">Sobre mí</a>
              </nav>
            </div>
            <h1 className="text-xs text-[#616060] font-libre-baskerville absolute right-0">
              Lynn&apos;s<br />Portfolio
            </h1>
          </div>
          <button type="button" className="bg-blue-green/80 hover:bg-blue-green px-3 py-2 rounded-lg text-[8px]">
            Contacto
          </button>
        </header>
      </div>
    </>
  );
}

export default Home;
