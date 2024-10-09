import Image from "next/image";

const POKPOKPokeAndSushiPage = () => {
  return (
    <section className="project-section">
      <Image
        src="/Branding/POKPOKPoke/portada.webp"
        alt="POKPOK Poke Portada"
        width={1000}
        height={1000}
        className="project-banner"
      />
      <h1 className="project-title">POKPOK Poke</h1>
      <div className="flex items-center">
        <Image
          src="/Branding/POKPOKPoke/1.webp"
          alt="POKPOK Poke Logo"
          width={1000}
          height={1000}
          className="project-normal-img object-[50%_50%] project-img-half-width mr-2 xs:aspect-square"
        />
        <div className="w-1/2 py-1 space-y-2 ml-1 flex flex-col flex-1">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Restaurante de poke y sushi inspirado en la cultura hawaiana. Con
            varios ingredientes para crear tu propio poke bowl basado en tus
            preferencias, o si lo prefieres, cajas de sushi.
          </p>
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">
            Branding, merchandising, ilustración, packaging
          </p>
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      <Image
        src="/Branding/POKPOKPoke/2.webp"
        alt="POKPOK Poke branding"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <Image
        src="/Branding/POKPOKPoke/3.webp"
        alt="POKPOK Poke branding"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <Image
        src="/Branding/POKPOKPoke/4.webp"
        alt="POKPOK Poke branding camisetas"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <p className="project-disclaimer">
        Esta empresa ha sido creada de manera ficticia con el objetivo de
        aplicar el diseño de branding y logotipo.
      </p>
    </section>
  );
};
export default POKPOKPokeAndSushiPage;
