import Image from 'next/image'

const UrbanLeafPage = () => {
  return (
    <section className='project-section'>
        <Image src="/UrbanLeaf/portada.webp" alt="UrbanLeaf Portada" width={1000} height={1000} className='project-banner object-[0%_55%]' />
        <h1 className="project-title">UrbanLeaf</h1>
        <div className='flex items-center'>
            <Image src="/UrbanLeaf/gif_urban_leaf.gif" alt="UrbanLeaf Gif" width={1000} height={1000} className='project-normal-img object-[50%_50%] project-img-half-width mr-1' />
            <div className='w-1/2 py-1 space-y-2 ml-1 flex flex-col flex-1'>
                <p className='project-title-description'>Resumen</p>
                <p className='project-text'>UrbanLeaf es una empresa que ofrece la posibilidad de crear tu propio huerto en casa, pensado principalmente para hogares en grandes ciudades.</p>
                <p className='project-text'>Para ello, ofrece su producto principal: ‘’Mini Kitchen Garden’’, el cual incluye elementos básicos para empezar a crear tu propio jardín de hierbas aromáticas.</p>
                <p className='project-title-description'>Herramientas</p>
                <p className='project-text'>Adobe Illustrator, Adobe Photoshop</p>
            </div>
        </div>
        <Image src="/UrbanLeaf/patron_hierbas.webp" alt="UrbanLeaf Patrón Hierbas" width={1000} height={1000} className='project-banner' />
        <div className='flex'>
            <Image src="/UrbanLeaf/packaging_1.webp" alt="UrbanLeaf Packaging" width={1000} height={1000} className='project-normal-img project-img-half-width mr-2' />
            <Image src="/UrbanLeaf/packaging_2.webp" alt="UrbanLeaf Packaging" width={1000} height={1000} className='project-normal-img project-img-half-width ml-2' />
        </div>
        <p className='project-text text-center mx-auto w-3/4'>UrbanLeaf también ofrece la posibilidad de comprar semillas distintas a las del kit.</p> 
        <Image src="/UrbanLeaf/gif_semillas.gif" alt="UrbanLeaf Gif Semillas" width={1000} height={1000} className='rounded-lg' />
        <p className='project-disclaimer'>Esta empresa ha sido creada de manera ficticia con el objetivo de aplicar el diseño de packaging, y logotipo.</p>
    </section>
  ) 
}
export default UrbanLeafPage