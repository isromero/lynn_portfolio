import Image from "next/image";

const LetsLearnMyFirstWordsPage = () => {
  return (
    <section className="project-section">
      <Image
        src="/Packaging/LetsLearnMyFirstWords/portada.webp"
        alt="Let´s Learn! My first words portada"
        width={1000}
        height={1000}
        className="project-banner"
      />
      <h1 className="project-title">Let´s Learn! My first words</h1>
      <div className="flex items-center">
        <Image
          src="/Packaging/LetsLearnMyFirstWords/1.webp"
          alt="Let´s Learn! My first words packaging y tarjetas"
          width={1000}
          height={1000}
          className="project-normal-img object-[50%_50%] project-img-half-width mr-2 xs:aspect-square"
        />
        <div className="w-1/2 py-1 space-y-2 ml-1 flex flex-col flex-1">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Juego de cartas para niños pequeños, contiene ilustraciones acordes
            a las letras del abecedario. Packaging impreso y montado en la vida
            real al igual que las cartas.
          </p>
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">
            Packaging, ilustración, gotografía, edición de fotos.
          </p>
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/Packaging/LetsLearnMyFirstWords/2.webp"
          alt="Let´s Learn! My first words packaging"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width mr-2"
        />
        <Image
          src="/Packaging/LetsLearnMyFirstWords/portada.webp"
          alt="Let´s Learn! My first words desde cerca packaging"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width ml-2"
        />
      </div>
      <div className="flex">
        <Image
          src="/Packaging/LetsLearnMyFirstWords/4.webp"
          alt="Let´s Learn! My first words tarjetas"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width mr-2"
        />
        <Image
          src="/Packaging/LetsLearnMyFirstWords/5.webp"
          alt="Let´s Learn! My first words packaging"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width ml-2"
        />
      </div>
    </section>
  );
};
export default LetsLearnMyFirstWordsPage;
