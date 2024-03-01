"use client";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 h-full">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-32">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm md:text-base prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Analizamos tus procesos de ventas",
    description: (
      <>
        <p className="mb-4">
          Nos juntaremos contigo para entender tus procesos de ventas, objetivos
          comerciales, principales áreas de mejora y oportunidades de
          crecimiento.
        </p>
        <p>
          Armaremos una estrategia de automatización personalizada para tu caso,
          y dejaremos claro el punto de partida, las herramientas a usar y el
          impacto que tendrán para alcanzar tus objetivos.
        </p>
      </>
    ),
    badge: "Consultoría",
    image: "/consultoria.jpg",
  },
  {
    title: "Diseñamos e implementamos el plan de acción",
    description: (
      <>
        <p className="mb-4">
          Te guiaremos en el diseño de una estrategia de automatización
          personalizada para tu negocio, definiendo las herramientas de
          automatización óptimas para tu caso.
        </p>
        <p>
          Nos encargamos de todos los aspectos del proceso, desde la
          configuración inicial hasta la integración con tus sistemas
          existentes, asegurando una implementación rápida y eficiente que
          minimiza el tiempo de inactividad y maximiza el retorno de la
          inversión.
        </p>
      </>
    ),
    badge: "Implementación",
    image: "/automations.png",
  },
  {
    title: "Soporte Continuo",
    description: (
      <>
        <p>
          Es necesario mantener las herramientas de automatización actualizadas
          y en funcionamiento para que sigan siendo efectivas. Nos comprometemos
          a ofrecerte un soporte continuo y proactivo para resolver cualquier
          problema técnico de manera rápida y eficiente, minimizando así
          cualquier interrupción en tus operaciones comerciales.
        </p>
      </>
    ),
    badge: "Mantenimiento",
    image: "/support.jpg",
  },
];
