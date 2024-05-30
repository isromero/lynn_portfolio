"use client";

import HeaderNav from "@/components/HeaderNav/HeaderNav";
import { useState } from "react";
import projectsData from "./projectsData";
import Image from 'next/image';
import Link from "next/link";

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
    <div className="flex flex-col justify-center min-h-screen h-full w-full px-8 mt-32 pb-4">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-5 gap-x-8 gap-y-4">
            {projectsData.map((project) => {
              if (project.type?.includes(type)) {
                return (
                  <div key={project.id} className="rounded-lg space-y-2">
                    <Link href={project.slug}>
                      <Image src={project.image} alt={project.title} width={1000} height={1000} style={{objectFit: "cover"}} className="aspect-square" />
                    </Link>
                    <h2 className="font-medium text-xs">{project.title}</h2>
                    <p className="text-[0.5rem]">{project.description}</p>
                  </div>
                )
              }
            }
            )}
        </div>
      </section>
    </div>
  )
}

export default ProyectosPage;