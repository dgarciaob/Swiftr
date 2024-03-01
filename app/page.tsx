import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarSection from "@/components/Navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconMessages,
  IconClock,
} from "@tabler/icons-react";
import { TracingBeamDemo } from "@/components/TracingBeam";
import { TabsDemo } from "@/components/Tabs";
import { BackgroundBeamsDemo } from "@/components/BackgroundBeam";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="init">
      <section>
        <NavbarSection />
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center px-8 justify-center space-y-16 md:space-y-0 md:flex md:flex-row md:justify-between md:px-16 lg:px-20">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
            <div className="flex flex-col space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-7xl font-bold text-center md:text-left text-black">
                Automatización <br /> para inmobiliarias
              </h1>
              <p className="mt-6 md:mt-10 font-normal text-base md:text-lg text-neutral-800 max-w-lg md:max-w-xl text-center md:text-left">
                Ahorra tiempo y genera{" "}
                <span className="font-extrabold">más dinero</span> mediante
                automatización de prospección y gestión de leads.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-8 md:justify-normal">
              <Link href="#contacto" scroll className="scroll-smooth">
                <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 hover:scale-105 hover:-translate-y-2 transition-all ease-in-out duration-300">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-base font-medium text-white backdrop-blur-3xl">
                    Empieza Ahora
                  </span>
                </button>
              </Link>
              <Link href="#problema" scroll className="scroll-smooth">
                <button className="relative inline-flex h-14 overflow-hidden rounded-full border hover:bg-white transition-all ease-in-out duration-300">
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-8 py-1 text-base font-medium text-black">
                    Descubre Cómo
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <Image
            src="/swerveHeroImg.png"
            alt="Hero"
            width={400}
            height={400}
            className="object-contain w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px] relative z-20"
          />
        </div>
      </section>

      <section className="md:px-16 md:py-32 py-16 px-8" id="problema">
        <h2 className="text-center font-bold text-3xl md:text-5xl max-x-4xl">
          ¿Por qué se estancó tu Inmobiliaria?
        </h2>
        <BentoGrid className="max-w-4xl mx-auto mt-20 px-8">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>

      <section className="md:px-16 md:py-24 py-16 px-6 flex flex-col space-y-10 md:space-y-12 lg:space-y-16 bg-slate-50">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="flex justify-center items-center font-bold text-3xl text-center md:text-5xl max-x-2xl leading-10">
            Aumenta la conversión de tu Funnel
          </h2>
          <p className="text-center">
            ¿Te imaginas mejorar tu productividad, rentabilidad y tener control
            total sobre tu fuerza de ventas?
          </p>
        </div>
        <TabsDemo />
      </section>

      <section className="md:px-16 md:py-24 pt-32 px-6" id="proceso">
        <h2 className="text-center font-bold text-3xl md:text-5xl max-x-4xl mb-20">
          Conoce cómo lo haremos
        </h2>
        <TracingBeamDemo />
      </section>

      <section
        className="md:px-16 md:py-24 py-16 px-8 bg-slate-50"
        id="contacto"
      >
        <h2 className="text-center font-bold text-3xl md:text-5xl max-x-4xl mb-0">
          ¿Estás listo para mejorar tu proceso de ventas?
        </h2>
        <BackgroundBeamsDemo />
      </section>

      <Footer />
    </main>
  );
}

const Skeleton = () => (
  <Image
    src="/chat.jpg"
    alt="Chat Pic"
    width={400}
    height={400}
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "
  />
);
const Skeleton2 = () => (
  <Image
    src="/lessLeads.jpg"
    alt="Chat Pic"
    width={800}
    height={800}
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
  />
);
const Skeleton3 = () => (
  <Image
    src="/tasks.jpg"
    alt="Chat Pic"
    width={800}
    height={800}
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover"
  />
);

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );

const items = [
  {
    title: "Falta de Seguimiento",
    description:
      "Sin las herramientas adecuadas, el seguimiento a escala es inviable.",
    header: <Skeleton />,
    icon: <IconMessages className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Menor Conversión de Leads",
    description:
      "Por respuestas tardías, procesos poco claros, seguimiento débil.",
    header: <Skeleton2 />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pérdida de Tiempo Operativo",
    description: "Tus agentes pierden tiempo en tareas repetitivas.",
    header: <Skeleton3 />,
    icon: <IconClock className="h-4 w-4 text-neutral-500" />,
  },
];
