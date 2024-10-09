import Image from "next/image";

const HoraDeAventurasTheCookbookPage = () => {
  return (
    <section className="project-section">
      <Image
        src="/Editorial/HoraDeAventuras/portada.webp"
        alt="Hora de Aventuras: The cookbook Portada"
        width={1000}
        height={1000}
        className="project-banner"
      />
      <h1 className="project-title">Hora de Aventuras: The cookbook</h1>
      <div className="flex items-center">
        <Image
          src="/Editorial/HoraDeAventuras/1.webp"
          alt="Hora de Aventuras: The cookbook"
          width={1000}
          height={1000}
          className="project-normal-img object-[50%_50%] project-img-half-width mr-2 xs:aspect-square"
        />
        <div className="w-1/2 py-1 space-y-2 ml-1 flex flex-col flex-1">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Libro de cocina hecho por mi con las recetas de la serie de
            animación Hora de Aventuras. He recreado la escena de introducción
            original pero cambiando las posiciones de los personajes por una
            temática de picnic.
          </p>
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">Editorial, Ilustración</p>
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">
            Adobe InDesign, Adobe Illustrator, Adobe Photoshop
          </p>
        </div>
      </div>
      <Image
        src="/Editorial/HoraDeAventuras/2.webp"
        alt="Hora de Aventuras: The cookbook"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <Image
        src="/Editorial/HoraDeAventuras/3.webp"
        alt="Hora de Aventuras: The cookbook"
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
export default HoraDeAventurasTheCookbookPage;
