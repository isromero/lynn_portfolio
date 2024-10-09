import Image from "next/image";

const ManoloBakesXBarbiePage = () => {
  return (
    <section className="project-section">
      <Image
        src="/Packaging/ManoloBakesXBarbie/portada.webp"
        alt="Manolo Bakes X Barbie Portada"
        width={1000}
        height={1000}
        className="project-banner"
      />
      <h1 className="project-title">MANOLO BAKES X BARBIE</h1>
      <div className="flex items-center">
        <Image
          src="/Packaging/ManoloBakesXBarbie/1.webp"
          alt="Manolo Bakes X Barbie"
          width={1000}
          height={1000}
          className="project-normal-img object-[50%_50%] project-img-half-width mr-2 xs:aspect-square"
        />
        <div className="w-1/2 py-1 space-y-2 ml-1 flex flex-col flex-1">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Campaña de colaboración realizada por mí entre la empresa española
            Manolo Bakes y Barbie, he creado cómo sería el producto real, a
            parte de publicaciones de redes sociales, fotografía y packaging.
          </p>
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">
            Packaging, Realización de campañas, edición y retoque se fotos,
            social media.
          </p>
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">
            Adobe Illustrator, Adobe After Effects, Adobe Photoshop
          </p>
        </div>
      </div>
      <div className="flex w-full space-x-4">
        <div className="w-1/2 relative">
          <Image
            src="/Packaging/ManoloBakesXbarbie/2.webp"
            alt="Manolo Bakes X Barbie desde cerca"
            width={1000}
            height={1000}
            layout="responsive"
            className="rounded-lg aspect-square"
          />
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/Packaging/ManoloBakesXbarbie/3.webp"
            alt="Manolo Bakes X Barbie desde cerca packaging"
            width={1000}
            height={1000}
            layout="responsive"
            className="rounded-lg aspect-square"
          />
        </div>
      </div>
      <Image
        src="/Packaging/ManoloBakesXBarbie/4.webp"
        alt="Manolo Bakes X Barbie Instagram"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <Image
        src="/Packaging/ManoloBakesXBarbie/5.gif"
        alt="Manolo Bakes X Barbie Packaging Gif"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
      <p className="project-disclaimer">
        Esta colaboración ha sido creada de manera ficticia con el objetivo de
        aplicar el diseño de packaging y logotipo.
      </p>
    </section>
  );
};
export default ManoloBakesXBarbiePage;
