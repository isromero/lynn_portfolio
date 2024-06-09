import Image from 'next/image'

const ComercioLocalPage = () => {
  return (
    <section className='project-section'>
      <h1 className="project-title">Cartelería: Apoya el comercio local</h1>
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <p className='project-title-description'>Resumen</p>
          <p className='project-text'>Diseño de pósters para recordar la importancia de apoyar al comercio local de los barrios.</p>
        </div>
        <div className='space-y-2 w-1/3'>
          <p className='project-title-description'>Herramientas</p>
          <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      <Image src="/Posters/ComercioLocal/gif_comercio_local.gif" alt="Apoya el Comercio Local Póster" width={1000} height={1000} />
    </section>
  ) 
}
export default ComercioLocalPage