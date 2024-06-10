"use client";

import Link from 'next/link';
import '@styles/globals.css';
import { useHeaderNav } from '@/context/HeaderNavContext';

type Props = {
  fixedTop?: boolean;
};

type HeaderContextValues = {
  aboutMe: boolean;
  setAboutMe: (value: boolean) => void;
  contact: boolean;
  handleAboutMe: () => void;
  handleContact: () => void;
};

const HeaderNav = ({ fixedTop = false }: Props)  => {
  const { aboutMe, setAboutMe, contact, handleAboutMe, handleContact } = useHeaderNav() as HeaderContextValues;

  const headerPositionClass = aboutMe ? 'top-20 -translate-y-1/4' : (fixedTop ? 'top-10' : (!contact ? 'top-2/4 -translate-y-2/4' : 'top-20'));
  const aboutMeSectionClass = aboutMe ? 'h-auto opacity-100 visible' : 'opacity-0 invisible h-0';

  
  return (
    <>
      <header className={`fixed z-50 text-center self-center bg-white/80 rounded-lg px-2 py-[7px] flex gap-x-4 items-center h-12 md:h-14 transition-all duration-[900ms] ${headerPositionClass}`}>
        <div className="w-32 md:w-36 relative flex gap-x-4 h-full">
          <div className="w-16 md:w-20 hover:w-full bg-black hover:bg-black rounded-lg text-[0.5rem] md:text-xs flex justify-center items-center transition-width h-full font-medium">
            <button
              type="button"
              className="bg-black/80 w-16 md:w-20 h-full hover:opacity-0 hover:invisible rounded-lg"
            >
              Explorar
            </button>
            <nav className="bg-black transition-width-opacity w-16 md:w-20 hover:w-full opacity-0 hover:opacity-100 hover:visible absolute inset-0 hover:z-20 h-full flex items-center justify-center rounded-lg">
              <Link href="/proyectos" className="w-full h-full justify-center flex items-center hover:text-white/80"
                onClick={() => setAboutMe(false)}>
                Proyectos
              </Link>
              <Link href={'/'}
                className="w-full h-full justify-center flex items-center hover:text-white/80"
                onClick={handleAboutMe}
              >
                Sobre mí
              </Link>
            </nav>
          </div>
          <h1 className="text-xs md:text-sm text-[#616060] font-libre-baskerville absolute right-1 md:right-0 mt-1 md:mt-0 leading-none">
            Lynn&apos;s<br />Portfolio
          </h1>
        </div>
        <button
          type="button"
          className="bg-blue-green/80 hover:bg-blue-green h-full w-16 md:w-20 rounded-lg text-[0.5rem] md:text-xs" onClick={handleContact}
        >
          Contacto
        </button>
      </header>
      {/* ABOUT ME */}
      <div className={`flex flex-col gap-y-10 items-center justify-center z-10 top-2/4 w-5/6 lg:w-3/6 h-0 transition-opacity duration-500 absolute -translate-y-2/4 ${aboutMeSectionClass}`}>
        <section className={`bg-white/90 text-[#616060] gap-y-10 rounded-lg px-8 md:px-16 lg:px-20 xl:px-24 py-6 md:py-12 lg:py-16 xl:py-20`}>
          <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-libre-baskerville mb-3'>Sobre mí</h2>
          <p className='text-xs md:text-sm lg:text-base xl:text-lg'>¡Hola! Mi nombre es Lynn, y soy diseñadora gráfica con un favoritismo por el branding.</p>
          <br />
          <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Estoy graduada en Marketing y Publicidad, pero mi pasión ha sido desde siempre crear y explotar al máximo mi creatividad, por ello, en este portfolio te presento mis proyectos, reales y ficticios. Me gusta salir de mi zona de confort y poder dar mi máximo en cada situación que se me presenta.</p>
          <br />
          <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Me considero alguien muy, perfeccionista, resolutiva y ambiciosa.</p>
          <br />
          <p className='text-xs md:text-sm lg:text-base xl:text-lg'>Ah, y también me considero buena cocinera y una chica muy amable, por comentar sobre mí brevemente :)</p>
        </section>
        <Link href={'/proyectos'}>
          <button
            type="button"
            className="bg-white/80 hover:bg-white text-black px-11 py-2 rounded-lg text-[0.5rem] md:text-xs lg:text-sm xl:text-lg"
            onClick={handleAboutMe}
          >
            Mis proyectos
          </button>
        </Link>
      </div>
      {/* CONTACT */}
      <div className={`bg-blue-black fixed left-0 right-0 bottom-0 w-full transition-all duration-500 z-30 overflow-hidden ${!contact ? 'h-0' : 'h-screen'}`} onClick={handleContact}>
      </div>
      <section className={`bg-blue-green/80 z-40 rounded-lg fixed bottom-0 left-0 right-0 mx-auto transition-all duration-[600ms] w-5/6 flex flex-col px-8 justify-center ${!contact ? 'h-0' : 'h-5/6'}`}>
        <div className={`transition-all duration-500 overflow-hidden ${!contact ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-auto'} max-w-[16ch] sm:max-w-full`}>
          <p className='text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium'>¡Gracias por estar aquí!</p>
          <p className='text-3xl md:text-4xl lg:text-5l xl:text-6xl text-black font-medium mt-4'>
            Tengamos una 
            <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'> pequeña </span>
          charla :)</p>
          <div className='flex items-center mt-12 md:mt-24 gap-x-2'>
            <div className='border border-solid border-white rounded-full w-2 lg:w-3 xl:w-4 h-2 lg:h-3 xl:h-4'>
            </div>
            <Link href="mailto:itslynnbs@gmail.com" className='text-xs lg:text-sm xl:text-base hover:underline' target='_blank'>Mándame un correo</Link>
          </div>
          <div className='flex items-center mt-5 gap-x-2'>
            <div className='border border-solid border-white rounded-full w-2 lg:w-3 xl:w-4 h-2 lg:h-3 xl:h-4'>
            </div>
            <Link href="https://www.behance.net/rodalynbantilo/projects" className='text-xs lg:text-sm xl:text-base hover:underline' target='_blank'>Behance</Link>
          </div>
          <div className='flex items-center mt-5 gap-x-2'>
            <div className='border border-solid border-white rounded-full w-2 lg:w-3 xl:w-4 h-2 lg:h-3 xl:h-4'>
            </div>
            <Link href="https://www.linkedin.com/in/rodalyn-b-29b72622b/" className='text-xs lg:text-sm xl:text-base hover:underline' target='_blank'>Linkedin</Link>
          </div>
          <div className='flex items-center mt-5 gap-x-2'>
            <div className='border border-solid border-white rounded-full w-2 lg:w-3 xl:w-4 h-2 lg:h-3 xl:h-4'>
            </div>
            <Link href="/proyectos" className='text-xs lg:text-sm xl:text-base hover:underline'>Mis proyectos</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderNav;
