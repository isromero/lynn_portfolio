import Image from "next/image";
import Link from "next/link";

const GPintosPage = () => {
  return (
    <section className="project-section">
      <h1 className="project-title">SEGURIDAD EN METRO DE MADRID</h1>
      <div className="flex justify-between space-x-2">
        <div className="space-y-2">
          <p className="project-title-description">Resumen</p>
          <p className="project-text">
            Cartelería para recordar medidas de seguridad en el Metro de Madrid
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
        src="/Posters/MetroDeMadrid/1.webp"
        alt="Metro de Madrid cede tu asiento"
        width={1000}
        height={1000}
      />
      <Image
        src="/Posters/MetroDeMadrid/portada.webp"
        alt="Metro de Madrid no pisar entre coche y andén"
        width={1000}
        height={1000}
      />
      <Image
        src="/Posters/MetroDeMadrid/3.webp"
        alt="Metro de Madrid facilita la salida"
        width={1000}
        height={1000}
      />
    </section>
  );
};
export default GPintosPage;
