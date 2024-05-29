"use client";

import HeaderNav from "@/components/HeaderNav/HeaderNav";
import { useState } from "react";

const ProyectosPage = () => {
  const [type, setType] = useState('Branding');
  const [descriptionType, setDescriptionType] = useState('Proyectos realizados de manera ficticia  para presentar trabajos de branding.');
  const [selectedType, setSelectedType] = useState('Branding');

  const handleType = (type: string) => {
    setType(type);
    setSelectedType(type);
    switch (type) {
      case 'Branding':
        setDescriptionType('Proyectos realizados de manera ficticia  para presentar trabajos de branding.');
        break;
      case 'Packaging':
        setDescriptionType('Proyectos realizados de manera ficticia  para presentar trabajos de packaging.');
        break;
      case 'Pósters':
        setDescriptionType('Proyectos realizados de manera ficticia  para presentar trabajos de pósters.');
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col justify-center min-h-screen h-full w-full px-8">
      <HeaderNav fixedTop />
      <section>
        <h1 className="text-base font-medium">{type}</h1>
        <p className="text-xs text-blue-green">{descriptionType}</p>
        <div className="flex gap-x-2 mt-7">
          <button 
            type="button" 
            className={`${selectedType === 'Branding' ? 'bg-white text-black border-none' : 'bg-transparent text-white border border-solid border-white'} w-14 text-[0.5rem] rounded-lg px-2 py-[0.38rem]`}
            onClick={() => handleType('Branding')}>
              Branding
          </button>
          <button
            type="button"
            className={`${selectedType === 'Packaging' ? 'bg-white text-black border-none' : 'bg-transparent text-white border border-solid border-white'} w-14 text-[0.5rem] rounded-lg px-2 py-[0.38rem]`}
            onClick={() => handleType('Packaging')}>
              Packaging
            </button>
          <button
            type="button"
            className={`${selectedType === 'Pósters' ? 'bg-white text-black border-none' : 'bg-transparent text-white border border-solid border-white'} w-14 text-[0.5rem] rounded-lg px-2 py-[0.38rem]`}
            onClick={() => handleType('Pósters')}>
              Pósters
            </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
        </div>
      </section>
    </div>
  )
}

export default ProyectosPage;