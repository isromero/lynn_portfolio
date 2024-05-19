import Link from 'next/link';
import { useState } from 'react';
import '@styles/globals.css';

const HeaderNav = () => {
  const [aboutMe, setAboutMe] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <>
      <header className="sticky top-20 z-10 text-center bg-white/80 rounded-lg px-2 py-[7px] flex gap-x-4 items-center h-12">
        <div className="w-32 relative flex gap-x-4 h-full">
          <div className="w-16 hover:w-full bg-black hover:bg-black rounded-lg text-[0.5rem] flex justify-center items-center transition-width h-full">
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
                onClick={() => setAboutMe(!aboutMe)}
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
          className="bg-blue-green/80 hover:bg-blue-green h-full w-16 rounded-lg text-[0.5rem]" onClick={() => setContact(!contact)}
        >
          Contacto
        </button>
      </header>
      <section className={`bg-white/90 text-[#616060] z-10 gap-y-10 w-5/6 rounded-lg overflow-y-hidden transition-margin-height ${aboutMe ? 'opacity-100 visible mt-20 h-auto px-8 py-6' : 'opacity-0 invisible mt-0 h-0 py-0 px-0'}`}>
        <h2 className='text-3xl font-libre-baskerville mb-3'>Sobre mí</h2>
        <p className='text-xs'>¡Hola! Mi nombre es Lynn, y soy diseñadora gráfica con un favoritismo por el branding.</p>
        <br />
        <p className='text-xs'>Estoy graduada en Marketing y Publicidad, pero mi pasión ha sido desde siempre crear y explotar al máximo mi creatividad, por ello, en este portfolio te presento mis proyectos, reales y ficticios. Me gusta salir de mi zona de confort y poder dar mi máximo en cada situación que se me presenta.</p>
        <br />
        <p className='text-xs'>Me considero alguien muy, perfeccionista, resolutiva y ambiciosa.</p>
        <br />
        <p className='text-xs'>Ah, y también me considero buena cocinera y una chica muy amable, por comentar sobre mí brevemente :)</p>
      </section>
    </>
  );
};

export default HeaderNav;
