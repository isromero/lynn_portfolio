import Image from "next/image";

const MadridTechShowBrandingPage = () => {
  return (
    <section className="project-section">
      <Image
        src="/Branding/MadridTechShow/portada.webp"
        alt="Madrid Tech Show portada"
        width={1000}
        height={1000}
        className="project-banner"
      />
      <h1 className="project-title">Madrid Tech Show</h1>
      <div className="flex items-center">
        <Image
          src="/Branding/MadridTechShow/1.webp"
          alt="Madrid Tech Show póster"
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
          <p className="project-text">Branding, merchandising</p>
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      <div className="flex w-full space-x-4">
        <div className="w-1/2 relative">
          <Image
            src="/Branding/MadridTechShow/2.webp"
            alt="Madrid Tech Show botellas"
            width={1000}
            height={1000}
            layout="responsive"
            className="rounded-lg aspect-square"
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/Branding/MadridTechShow/3.webp"
            alt="Madrid Tech Show desde tarjeta"
            width={1000}
            height={1000}
            layout="responsive"
            className="rounded-lg aspect-square"
          />
        </div>
      </div>
      <div className="flex w-full space-x-4">
        <div className="w-1/2 relative">
          <Image
            src="/Branding/MadridTechShow/4.webp"
            alt="Madrid Tech Show libreta"
            width={1000}
            height={1000}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/Branding/MadridTechShow/5.webp"
            alt="Madrid Tech Show libretas"
            width={1000}
            height={1000}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      </div>
      <p className="project-disclaimer">
        Este proyecto ha sido creado de manera ficticia
      </p>
    </section>
  );
};
export default MadridTechShowBrandingPage;
