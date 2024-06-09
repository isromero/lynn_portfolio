import Image from 'next/image'

const DrMartensPage = () => {
  return (
    <section className='project-section'>
      <h1 className="project-title">Cartelería: Dr. Martens</h1>
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <p className='project-title-description'>Resumen</p>
          <p className='project-text'>Propuesta de cartel publicitario y banner web para Dr. Martens ‘’Edición Limitada: Carteras y Cinturones’’</p>
        </div>
        <div className='space-y-2 w-1/3'>
          <p className='project-title-description'>Herramientas</p>
          <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      <Image src="/Posters/DrMartens/gif_dr_martens.gif" alt="DrMartens Gif" width={1000} height={1000} />
      <Image src="/Posters/DrMartens/banner_web.webp" alt="DrMartens Web Banner" width={1000} height={1000} />
      <Image src="/Posters/DrMartens/mockup.webp" alt="DrMartens Web Mockup" width={1000} height={1000} />
    </section>
  ) 
}
export default DrMartensPage