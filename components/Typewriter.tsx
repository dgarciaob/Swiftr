"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Automatiza y",
    },
    {
      text: "convierte",
    },
    {
      text: "eficientemente",
    },
    {
      text: "con",
    },
    {
      text: "Swiftr.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base  ">
        Tu Swift comienza aquí
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col justify-center items-center space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-8 md:justify-normal">
        <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 hover:scale-105 hover:-translate-y-2 transition-all ease-in-out duration-300">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-base font-medium text-white backdrop-blur-3xl">
            Empieza Ahora
          </span>
        </button>
      </div>
    </div>
  );
}
