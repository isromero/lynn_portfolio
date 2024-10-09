import Image from "next/image";

const MadridTravelGuidePage = () => {
  return (
    <section className="project-section">
      <Image
        src="/Editorial/MadridTravelGuide/portada.webp"
        alt="Madrid Travel Guide Portada"
        width={1000}
        height={1000}
        className="project-banner"
      />
      <h1 className="project-title">Madrid: Travel Guide</h1>
      <div className="flex items-center">
        <Image
          src="/Editorial/MadridTravelGuide/portada.webp"
          alt="Madrid Travel Guide"
          width={1000}
          height={1000}
          className="project-normal-img object-[50%_50%] project-img-half-width mr-2 xs:aspect-square"
        />
        <div className="w-1/2 py-1 space-y-2 ml-1 flex flex-col flex-1">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Libro que muestra las principales atracciones turísticas de la
            ciudad de Madrid.
          </p>
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">Editorial, Retoque de imágenes</p>
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">
            Adobe InDesign, Adobe Illustrator, Adobe Photoshop
          </p>
        </div>
      </div>
      <Image
        src="/Editorial/MadridTravelGuide/2.webp"
        alt="Madrid Travel Guide"
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
export default MadridTravelGuidePage;
