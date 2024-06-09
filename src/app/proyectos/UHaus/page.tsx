import Image from 'next/image'

const UHausPage = () => {
  return (
    <section className='project-section'>
      <Image src="/UHaus/portada.webp" alt="UHaus Portada" width={1000} height={1000} className='project-normal-img' />
      <h1 className="project-title">UHaus</h1>
      <div className='space-y-2'>
        <p className='project-title-description'>Resumen</p>
        <p className='project-text'>UHaus es un concepto innovador de apartamentos temporales que incluye todas las comodidades para trabajar en remoto, conectar con personas, y descansar como en casa.</p>
        <p className='project-title-description'>Herramientas</p>
        <p className='project-text'>Adobe Illustrator, Adobe After Effects, Adobe Photoshop</p>
      </div>
      <Image src="/UHaus/gif_logo.gif" alt="UHaus Gif Logo" width={1000} height={1000} className='project-big-img' />
      <Image src="/UHaus/branding.webp" alt="UHaus Branding" width={1000} height={1000} className='project-big-img' />
      <div className='flex items-center'>
        <Image src="/UHaus/gif_uhaus.gif" alt="UHaus Gif" width={1000} height={1000} className='project-normal-img project-img-half-width mr-1' />
        <div className='w-1/2 py-1 space-y-2 ml-1'>
            <p className='project-title-description'>Idea de marca</p>
            <p className='project-text'>‘’Work, Connect, Rest’’ hace referencia a las cosas más cruciales para UHaus, un lugar en el que la vida profesional y personal convive sin conlicto.</p>
        </div>
      </div>
      <Image src="/UHaus/cartel.webp" alt="UHaus Cartel" width={1000} height={1000} className='project-big-img' />
      <p className='project-disclaimer'>Esta empresa ha sido creada de manera ficticia con el objetivo de aplicar el diseño de logotipo, ilustración e identidad visual.</p>
    </section>
  ) 
}
export default UHausPage