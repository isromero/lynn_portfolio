import Image from "next/image";

const BubocaPage = () => {
  return (
    <section className="project-section">
      <Image
        src="/Branding/Buboca/portada.webp"
        alt="Buboca Portada"
        width={1000}
        height={1000}
        className="project-banner"
      />
      <h1 className="project-title">Buboca</h1>
      <div className="flex items-center">
        <Image
          src="/Branding/Buboca/1.webp"
          alt="Buboca Logo"
          width={1000}
          height={1000}
          className="project-normal-img object-[50%_50%] project-img-half-width mr-2 xs:aspect-square"
        />
        <div className="w-1/2 py-1 space-y-2 ml-1 flex flex-col flex-1">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Buboca es una tienda de té de burbujas, este proyecto contiene
            imágenes realizadas por IA (las bebidas).
          </p>
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">
            Branding, ilustración, IA, Social media, manipulación de imágenes
          </p>
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">
            Adobe Illustrator, Adobe Photoshop, Firefly
          </p>
        </div>
      </div>
      <Image
        src="/Branding/Buboca/2.webp"
        alt="Buboca branding tienda"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <Image
        src="/Branding/Buboca/3.webp"
        alt="Buboca branding"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <Image
        src="/Branding/Buboca/4.webp"
        alt="Buboca branding Instagram"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <div className="flex rounded-lg">
        <div className="w-[33%] relative aspect-square">
          <Image
            src="/Branding/Buboca/5.webp"
            alt="Buboca logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-[33%] relative aspect-square">
          <Image
            src="/Branding/Buboca/6.webp"
            alt="Buboca logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-[33%] relative aspect-square">
          <Image
            src="/Branding/Buboca/7.webp"
            alt="Buboca logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <p className="project-disclaimer">
        Esta empresa ha sido creada de manera ficticia con el objetivo de
        aplicar el diseño de branding y logotipo.
      </p>
    </section>
  );
};
export default BubocaPage;
