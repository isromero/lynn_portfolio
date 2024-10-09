import Image from "next/image";

const DrMartensPage = () => {
  return (
    <section className="project-section">
      <h1 className="project-title">DR. MARTENS WALLETS</h1>
      <div className="flex justify-between space-x-2">
        <div className="space-y-2">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Cartelería de campaña ficticia para carteras de Dr. Martens
          </p>
        </div>
        <div className="space-y-2">
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">Adobe Illustrator, Adobe Photoshop</p>
        </div>
        <div className="space-y-2">
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">Ilustración, Manipulación de imágenes</p>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/Posters/DrMartens/1.webp"
          alt="Dr. Martens wallets poster"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width mr-2"
        />
        <Image
          src="/Posters/DrMartens/portada.webp"
          alt="Dr. Martens wallets poster"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width ml-2"
        />
      </div>
      <div className="flex">
        <Image
          src="/Posters/DrMartens/3.webp"
          alt="Dr. Martens wallets poster"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width mr-2"
        />
        <Image
          src="/Posters/DrMartens/4.webp"
          alt="Dr. Martens wallets poster"
          width={1000}
          height={1000}
          className="project-normal-img project-img-half-width ml-2"
        />
      </div>
    </section>
  );
};
export default DrMartensPage;
