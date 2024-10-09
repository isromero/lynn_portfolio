"use client";

import { useState } from "react";
import projectsData from "./projectsData";
import Image from "next/image";
import Link from "next/link";

const ProyectosPage = () => {
  const [type, setType] = useState("Packaging");
  const [selectedType, setSelectedType] = useState("Packaging");

  const handleType = (type: string) => {
    setType(type);
    setSelectedType(type);
  };

  return (
    <>
      <section>
        <h1 className="font-coolvetica text-5xl lg:text-6xl xl:text-7xl font-medium uppercase">
          {type}
        </h1>
        <div className="font-coolvetica flex gap-x-2 mt-7">
          <button
            type="button"
            className={`${
              selectedType === "Packaging"
                ? "bg-white text-black border-none"
                : "bg-transparent text-white border border-solid border-white"
            } text-[0.5rem] md:text-xs rounded-lg px-6 py-[0.30rem]`}
            onClick={() => handleType("Packaging")}
          >
            Packaging
          </button>
          <button
            type="button"
            className={`${
              selectedType === "Branding"
                ? "bg-white text-black border-none"
                : "bg-transparent text-white border border-solid border-white"
            } text-[0.5rem] md:text-xs rounded-lg px-6 py-[0.30rem]`}
            onClick={() => handleType("Branding")}
          >
            Branding
          </button>
          <button
            type="button"
            className={`${
              selectedType === "Editorial"
                ? "bg-white text-black border-none"
                : "bg-transparent text-white border border-solid border-white"
            } text-[0.5rem] md:text-xs rounded-lg px-6 py-[0.30rem]`}
            onClick={() => handleType("Editorial")}
          >
            Editorial
          </button>
          <button
            type="button"
            className={`${
              selectedType === "Pósters"
                ? "bg-white text-black border-none"
                : "bg-transparent text-white border border-solid border-white"
            } text-[0.5rem] md:text-xs rounded-lg px-6 py-[0.30rem]`}
            onClick={() => handleType("Pósters")}
          >
            Pósters
          </button>
        </div>
        <div
          className={`mt-5 gap-y-8 ${
            selectedType === "Pósters"
              ? "grid grid-cols-2 sm:grid-cols-3 gap-x-8"
              : "flex flex-col w-full"
          }`}
        >
          {projectsData.map((project) => {
            if (project.type?.includes(type)) {
              return (
                <div key={project.id} className="rounded-lg space-y-2">
                  <Link href={project.slug}>
                    {selectedType === "Pósters" ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1000}
                        height={1000}
                        style={{ objectFit: "cover" }}
                        className="aspect-square"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={2000}
                        height={1000}
                        style={{ objectFit: "cover" }}
                        className="h-96"
                      />
                    )}
                  </Link>
                  <h2 className="font-coolvetica font-medium text-xl md:text-2xl lg:text-3xl">
                    {project.title}
                  </h2>
                  <p className="text-xs md:text-sm">{project.description}</p>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default ProyectosPage;
