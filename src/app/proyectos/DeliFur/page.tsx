import Image from 'next/image'

const DeliFurPage = () => {
  return (
    <section className='project-section'>
        <Image src="/DeliFur/portada.webp" alt="DeliFur Portada" width={1000} height={1000} className='project-banner object-[0%_10%]' />
        <h1 className="project-title">DeliFur</h1>
        <div className='space-y-2'>
          <p className='project-title-description'>Resumen</p>
          <p className='project-text'>DeliFur es una marca de chuches para perros cuya misión es brindar productos deliciosos y saludables para nuestros amigos mediante el uso de ingredientes naturales y de alta calidad.</p>
          <p className='project-title-description'>Herramientas</p>
          <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
        </div>
        <Image src="/DeliFur/gif_packaging.gif" alt="DeliFur Gif Packaging" width={1000} height={1000} className='rounded-lg' />
        <Image src="/DeliFur/bolsas.webp" alt="DeliFur Bolsas" width={1000} height={1000} className='rounded-lg' />
        <Image src="/DeliFur/ilustracion_perros.webp" alt="DeliFur Ilustración Perros" width={1000} height={1000} className='rounded-lg' />
        <p className='project-disclaimer'>Esta empresa ha sido creada de manera ficticia con el objetivo de aplicar el diseño de packaging, cartelería, y logotipo.</p>
    </section>
  ) 
}
export default DeliFurPage