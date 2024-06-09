import Image from 'next/image'

const BalatSkincarePage = () => {
  return (
    <section className='project-section'>
      <h1 className="project-title">Cartelería: Balat Skincare</h1>
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <p className='project-title-description'>Resumen</p>
          <p className='project-text'>Diseño de carteles publicitarios para una marca ficticia de skincare.</p>
        </div>
        <div className='space-y-2 w-1/3'>
          <p className='project-title-description'>Herramientas</p>
          <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      <Image src="/Posters/BalatSkincare/gif_skincare.gif" alt="Balat Skincare Gif" width={1000} height={1000} />
      <Image src="/Posters/BalatSkincare/poster.webp" alt="Balat Skincare Póster" width={1000} height={1000} />
    </section>
  ) 
}
export default BalatSkincarePage