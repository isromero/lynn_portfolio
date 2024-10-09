import Image from "next/image";

const TateModernPage = () => {
  return (
    <section className="project-section">
      <h1 className="project-title">TATE MODERN</h1>
      <div className="flex justify-between space-x-2">
        <div className="space-y-2">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Cartelería realizada a partir de la escultura ´´Number 185´´
            expuesta en Tate Modern
          </p>
        </div>
        <div className="space-y-2">
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">Adobe Illustrator, Adobe Photoshop</p>
        </div>
        <div className="space-y-2">
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">Manipulación de imágenes</p>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/Posters/TateModern/1.webp"
          alt="Tate Modern I am the curator of my own misery"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width mr-2"
        />
        <Image
          src="/Posters/TateModern/2.webp"
          alt="Tate Modern I am the curator of my own misery"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width ml-2"
        />
      </div>
      <div className="flex">
        <Image
          src="/Posters/TateModern/portada.webp"
          alt="Tate Modern I am the curator of my own misery"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width mr-2"
        />
        <Image
          src="/Posters/TateModern/4.webp"
          alt="Tate Modern I am the curator of my own misery"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width ml-2"
        />
      </div>
    </section>
  );
};
export default TateModernPage;
