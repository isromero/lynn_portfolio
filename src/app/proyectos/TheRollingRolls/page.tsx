import Image from 'next/image'

const TheRollingRollsPage = () => {
  return (
    <section className='project-section'>
        <Image src="/TheRollingRolls/portada.webp" alt="The Rolling Rolls Portada" width={1000} height={1000} className='project-banner object-[0%_30%]' />
        <h1 className="project-title">The Rolling Rolls</h1>
        <div className='flex items-center'>
           <div className='w-1/2 py-1 space-y-2 mr-1'>
              <p className='project-title-description'>Resumen</p>
              <p className='project-text'>The Rolling Rolls es una cafetería especializada en rollitos de canela con distintos sabores.</p>
              <p className='project-title-description'>Herramientas</p>
              <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
          </div>
          <Image src="/TheRollingRolls/logo.webp" alt="TheRollingRolls Logo" width={1000} height={1000} className='project-normal-img project-img-half-width ml-1 object-[55%_50%]' />
        </div>
        <Image src="/TheRollingRolls/gif_the_rolling_rolls.gif" alt="TheRollingRolls Gif" width={1000} height={1000} className='project-normal-img object-cover rounded-lg' />
        <div className='flex items-center'>
          <div className='w-1/2 py-1 space-y-2 mr-1'>
              <p className='project-title-description'>Ilustración de personaje</p>
              <p className='project-text'>La mascota ‘’Ube Bon’’ nace con la intención de otorgar a la marca una cara y personalidad.</p>
              <p className='project-text'>Su nombre es originario de la palabra ‘’Ube’’, una patata de sabor dulce originario en Filipinas y principal sabor de la cafetería. y ‘’Bon’’, de la palabra inglesa ‘’Cinnabon’’.</p>
          </div>
          <Image src="/TheRollingRolls/menu_english.webp" alt="TheRollingRolls English Menu" width={1000} height={1000} className='project-normal-img ml-1 project-img-half-width' />
        </div>
        <div className='flex items-center'>
          <Image src="/TheRollingRolls/menu_spanish.webp" alt="TheRollingRolls Spanish Menu" width={1000} height={1000} className='project-normal-img mr-1 project-img-half-width' />
          <div className='w-1/2 py-1 space-y-2 ml-1'>
              <p className='project-title-description'>Idea de marca</p>
              <p className='project-text'>The Rolling Rolls pretende destacar entre otros locales creando combinaciones de sabor únicos.</p>
              <p className='project-text'>La identidad visual de la empresa se basa en transmitir comodidad, diversión y dulzura.</p>
          </div>
        </div>
        <p className='project-disclaimer'>Esta empresa ha sido creada de manera ficticia con el objetivo de aplicar el diseño de logotipo, ilustración e identidad visual.</p>
    </section>
  ) 
}
export default TheRollingRollsPage