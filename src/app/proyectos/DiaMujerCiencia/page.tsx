import Image from 'next/image'

const DiaMujerCienciaPage = () => {
  return (
    <section className='project-section'>
      <h1 className="project-title">Cartelería: Día de la Mujer y la Niña en la Ciencia</h1>
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <p className='project-title-description'>Resumen</p>
          <p className='project-text'>Candidatura para el concurso para la Universidad de Alicante. ‘’Día de la Mujer y la Niña en la Ciencia.’’</p>
        </div>
        <div className='space-y-2 w-1/3'>
          <p className='project-title-description'>Herramientas</p>
          <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      <Image src="/Posters/DiaMujerCiencia/poster.webp" alt="Día de la Mujer y la Niña en la Ciencia" width={1000} height={1000} />
    </section>
  ) 
}
export default DiaMujerCienciaPage