"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import ContactFormSection from "./ContactForm";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-slate-50 relative flex flex-col items-center justify-center antialiased">
      <div className="p-4 z-10 w-full">
        <h1 className="relative z-10 text-xl md:text-4xl text-black text-center font-sans font-bold mt-4">
          Conectemos
        </h1>
        <ContactFormSection />
      </div>
      <BackgroundBeams />
    </div>
  );
}
