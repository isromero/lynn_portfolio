import Image from "next/image";
import Link from "next/link";

const GPintosPage = () => {
  return (
    <section className="project-section">
      <h1 className="project-title">Cartelería: Güevos Pintos</h1>
      <div className="flex justify-between space-x-2">
        <div className="space-y-2">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Candidatura para el concurso{" "}
            <Link
              href="https://festejoslapolasiero.com/el-concurso-de-carteles-de-guevos-pintos-traspasa-fronteras-mas-de-cien-propuestas-para-anunciar-la-fiesta-del-folclore-asturiano/"
              target="_blank"
              className="underline italic"
            >
              ‘’Güevos Pintos’’.
            </Link>
          </p>
        </div>
        <div className="space-y-2">
          <p className="project-title-description">Herramientas</p>
          <p className="project-text">Adobe Illustrator, Adobe Photoshop</p>
        </div>
        <div className="space-y-2">
          <p className="project-title-description">Habilidades</p>
          <p className="project-text">Ilustración</p>
        </div>
      </div>
      <Image
        src="/Posters/GuevosPintos/portada.webp"
        alt="Poster Güevos Pintos"
        width={1000}
        height={1000}
      />
    </section>
  );
};
export default GPintosPage;
