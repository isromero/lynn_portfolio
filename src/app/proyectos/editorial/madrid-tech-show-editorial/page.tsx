import Image from "next/image";

const MadridTechShowBrandingPage = () => {
  return (
    <section className="project-section">
      <Image
        src="/Editorial/MadridTechShow/portada.webp"
        alt="Madrid Tech Show portada"
        width={1000}
        height={1000}
        className="project-banner"
      />
      <h1 className="project-title">Madrid Tech Show</h1>
      <div className="flex items-center">
        <Image
          src="/Editorial/MadridTechShow/1.webp"
          alt="Madrid Tech Show Branding y tarjetas"
          width={1000}
          height={1000}
          className="project-normal-img object-[50%_50%] project-img-half-width mr-2 xs:aspect-square"
        />
        <div className="w-1/2 py-1 space-y-2 ml-1 flex flex-col flex-1">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Rebranding de la feria Madrid Tech Show. Merchandising design,
            rollup y prints.
          </p>
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">Editorial, impreso</p>
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">Adobe Illustrator, Adobe Indesign</p>
        </div>
      </div>
      <Image
        src="/Editorial/MadridTechShow/portada.webp"
        alt="Madrid Tech Show Branding"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <div className="flex w-full space-x-4">
        <div className="w-1/2 relative">
          <Image
            src="/Editorial/MadridTechShow/3.webp"
            alt="Madrid Tech Show tarjetas"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/Editorial/MadridTechShow/4.webp"
            alt="Madrid Tech Show Branding"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
      <Image
        src="/Editorial/MadridTechShow/5.webp"
        alt="Madrid Tech Show Branding"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <p className="project-disclaimer">
        Este proyecto ha sido creado de manera ficticia
      </p>
    </section>
  );
};
export default MadridTechShowBrandingPage;
