"use client";

import Link from 'next/link';
import { useState } from 'react';
import '@styles/globals.css';

type Props = {
  fixedTop?: boolean;
};

const HeaderNav = ({ fixedTop = false }: Props)  => {
  const [aboutMe, setAboutMe] = useState(false);
  const [contact, setContact] = useState(false);

  const handleAboutMe = () => {
    setContact(false);
    setAboutMe(!aboutMe);
  }

  const handleContact = () => {
    setAboutMe(false);
    setContact(!contact);
  }

  const headerPositionClass = aboutMe ? 'top-20 -translate-y-1/4' : (fixedTop ? 'top-10' : (!contact ? 'top-2/4 -translate-y-2/4' : 'top-20'));
  const aboutMeSectionClass = aboutMe ? 'h-auto opacity-100 visible' : 'opacity-0 invisible h-0';

  
  return (
    <>
      <header className={`fixed z-50 text-center self-center bg-white/80 rounded-lg px-2 py-[7px] flex gap-x-4 items-center h-12 transition-all duration-[900ms] ${headerPositionClass}`}>
        <div className="w-32 relative flex gap-x-4 h-full">
          <div className="w-16 hover:w-full bg-black hover:bg-black rounded-lg text-[0.5rem] flex justify-center items-center transition-width h-full font-medium">
            <button
              type="button"
              className="bg-black/80 w-16 h-full hover:opacity-0 hover:invisible rounded-lg"
            >
              Explorar
            </button>
            <nav className="bg-black transition-width-opacity w-16 hover:w-full opacity-0 hover:opacity-100 hover:visible absolute inset-0 hover:z-20 h-full flex items-center justify-center rounded-lg">
              <Link href="/proyectos" className="w-full h-full justify-center flex items-center hover:text-white/80">
                Proyectos
              </Link>
              <button
                type="button"
                className="w-full h-full justify-center flex items-center hover:text-white/80"
                onClick={handleAboutMe}
              >
                Sobre mí
              </button>
            </nav>
          </div>
          <h1 className="text-xs text-[#616060] font-libre-baskerville absolute right-1 leading-none mt-1">
            Lynn&apos;s<br />Portfolio
          </h1>
        </div>
        <button
          type="button"
          className="bg-blue-green/80 hover:bg-blue-green h-full w-16 rounded-lg text-[0.5rem]" onClick={handleContact}
        >
          Contacto
        </button>
      </header>
      {/* ABOUT ME */}
      <div className={`flex flex-col gap-y-10 items-center justify-center z-10 top-2/4 w-5/6 h-0 transition-opacity duration-500 absolute -translate-y-2/4 ${aboutMeSectionClass}`}>
        <section className={`bg-white/90 text-[#616060] gap-y-10 rounded-lg px-8 py-6`}>
          <h2 className='text-3xl font-libre-baskerville mb-3'>Sobre mí</h2>
          <p className='text-xs'>¡Hola! Mi nombre es Lynn, y soy diseñadora gráfica con un favoritismo por el branding.</p>
          <br />
          <p className='text-xs'>Estoy graduada en Marketing y Publicidad, pero mi pasión ha sido desde siempre crear y explotar al máximo mi creatividad, por ello, en este portfolio te presento mis proyectos, reales y ficticios. Me gusta salir de mi zona de confort y poder dar mi máximo en cada situación que se me presenta.</p>
          <br />
          <p className='text-xs'>Me considero alguien muy, perfeccionista, resolutiva y ambiciosa.</p>
          <br />
          <p className='text-xs'>Ah, y también me considero buena cocinera y una chica muy amable, por comentar sobre mí brevemente :)</p>
        </section>
        <Link href={'/proyectos'}>
          <button
            type="button"
            className="bg-white/80 hover:bg-white text-black px-11 py-2 rounded-lg text-[0.5rem] font-medium"
            onClick={handleAboutMe}
          >
            Mis proyectos
          </button>
        </Link>
      </div>
      {/* CONTACT */}
      <div className={`bg-blue-black absolute left-0 right-0 bottom-0 w-full transition-all duration-500 z-30 ${!contact ? 'h-0' : 'h-screen'}`}>
      </div>
      <section className={`bg-blue-green/80 z-40 rounded-lg absolute bottom-0 transition-all duration-[600ms] w-5/6 flex flex-col px-8 justify-center ${!contact ? 'h-0' : 'h-5/6'}`}>
        <div className={`transition-all duration-500 overflow-hidden ${!contact ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-auto'}`}>
          <p className='text-base font-medium'>¡Gracias por estar aquí!</p>
          <p className='text-3xl text-black font-medium mt-4'>
            Tengamos una<br /> 
            <span className='text-2xl'>pequeña</span><br />
          charla :)</p>
          <div className='flex items-center mt-10 gap-x-2'>
            <div className='border border-solid border-white rounded-full w-2 h-2'>
            </div>
            <Link href="mailto:itslynnbs@gmail.com" className='text-xs hover:underline' target='_blank'>Mándame un correo</Link>
          </div>
          <div className='flex items-center mt-5 gap-x-2'>
            <div className='border border-solid border-white rounded-full w-2 h-2'>
            </div>
            <Link href="https://www.behance.net/rodalynbantilo/projects" className='text-xs hover:underline' target='_blank'>Behance</Link>
          </div>
          <div className='flex items-center mt-5 gap-x-2'>
            <div className='border border-solid border-white rounded-full w-2 h-2'>
            </div>
            <Link href="https://www.linkedin.com/in/rodalyn-b-29b72622b/" className='text-xs hover:underline' target='_blank'>Linkedin</Link>
          </div>
          <div className='flex items-center mt-5 gap-x-2'>
            <div className='border border-solid border-white rounded-full w-2 h-2'>
            </div>
            <Link href="/proyectos" className='text-xs hover:underline'>Vuelve a mis proyectos</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderNav;
