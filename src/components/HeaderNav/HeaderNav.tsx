const HeaderNav = () => {

  return (
    <header className="sticky top-20 z-10 text-center bg-white/80 rounded-lg px-2 py-[7px] flex gap-x-4 items-center h-12">
      <div className="w-32 relative flex gap-x-4 h-full">
        <div className="w-16 hover:w-full bg-black hover:bg-black rounded-lg text-[0.5rem] flex justify-center items-center transition-width h-full">
          <button
            type="button"
            className="bg-black/80 w-16 h-full hover:opacity-0 hover:invisible rounded-lg">
            Explorar
          </button>
          <nav className="bg-black transition-width-opacity w-16 hover:w-full opacity-0 hover:opacity-100 hover:visible absolute inset-0 hover:z-20 h-full flex items-center justify-center rounded-lg">
            <a href="/proyectos" className="w-full h-full justify-center flex items-center hover:text-white/80">
              Proyectos
            </a>
            <a href="/sobre-mi" className="w-full h-full justify-center flex items-center hover:text-white/80">
              Sobre mí
            </a>
          </nav>
        </div>
        <h1 className="text-xs text-[#616060] font-libre-baskerville absolute right-1 leading-none mt-1">
          Lynn&apos;s<br />Portfolio
        </h1>
      </div>
      <button type="button" className="bg-blue-green/80 hover:bg-blue-green h-full w-16 rounded-lg text-[0.5rem]">
        Contacto
      </button>
    </header>
  );
};

export default HeaderNav;
