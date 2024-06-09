import Image from 'next/image'

const SanIsidroPage = () => {
  return (
    <section className='project-section'>
      <h1 className="project-title">Cartelería: Conciertos Fiestas de San Isidro 2024</h1>
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <p className='project-title-description'>Resumen</p>
          <p className='project-text'>Diseño de cartel informativo para los conciertos de la festividad de San Isidro 2024, Madrid.</p>
        </div>
        <div className='space-y-2 w-1/3'>
          <p className='project-title-description'>Herramientas</p>
          <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      <Image src="/Posters/SanIsidro/poster.webp" alt="San Isidro Póster Cartel" width={1000} height={1000} />
    </section>
  ) 
}
export default SanIsidroPage