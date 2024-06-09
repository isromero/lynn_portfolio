import Image from 'next/image'

const MadCoolPage = () => {
  return (
    <section className='project-section'>
      <h1 className="project-title">Cartelería: Rediseño MadCool 2024</h1>
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <p className='project-title-description'>Resumen</p>
          <p className='project-text'>Rediseño del logotipo y cartel del festival MadCool 2024.</p>
        </div>
        <div className='space-y-2 w-1/3'>
          <p className='project-title-description'>Herramientas</p>
          <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
        </div>
      </div>
      <Image src="/Posters/MadCool/gif_madcool.gif" alt="MadCool Póster Cartel" width={1000} height={1000} />
    </section>
  ) 
}
export default MadCoolPage