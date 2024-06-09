import Image from 'next/image'

const POKPOKPokeHousePage = () => {
  return (
    <section className='project-section'>
      <Image src="/POKPOKPokeHouse/portada.webp" alt="POK POK Poke House Portada" width={1000} height={1000} className='project-banner object-[0%_55%]' />
      <h1 className="project-title">POKPOKPokeHouse</h1>
      <div className='space-y-2'>
        <p className='project-title-description'>Resumen</p>
        <p className='project-text'>POK POK Poke House es un restaurante que ofrece una gran variedad de ingredientes para crear tu propio ‘’Poke Bowl’’ junto a su especialidad de cerveza artesana.</p>
        <p className='project-title-description'>Herramientas</p>
        <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
      </div>
      <Image src="/POKPOKPokeHouse/tarjetas_mockup.webp" alt="POK POK Poke House Tarjetas de fidelización" width={1000} height={1000} className='project-big-img' />
      <div className='space-y-2'>
        <p className='project-title-description'>Diseño de tarjetas de fidelización</p>
        <p className='project-text'>La empresa dispone de tarjetas de puntos a recolectar para  ganar un bowl gratis de Poke.</p>
      </div> 
      <div className='flex'>
        <Image src="/POKPOKPokeHouse/cerveza_mockup.webp" alt="POK POK Poke House Cerveza" width={1000} height={1000} className='project-big-img project-img-half-width mr-2' />
        <Image src="/POKPOKPokeHouse/menu.webp" alt="POK POK Poke House Menu" width={1000} height={1000} className='project-big-img project-img-half-width ml-2' />
      </div>
      <p className='project-disclaimer'>Esta empresa ha sido creada de manera ficticia con el objetivo de aplicar el diseño de logotipo, ilustración e identidad visual.</p>
    </section>
  ) 
}
export default POKPOKPokeHousePage