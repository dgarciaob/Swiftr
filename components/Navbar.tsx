"use client";

import Link from "next/link";
import Image from "next/image";

import "@/components/css/Navbar.css";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

interface NavbarProps {
  className?: string;
}

function NavbarSection({ className }: NavbarProps) {
  const date = new Date();
  const [topOfPage, setTopOfPage] = useState(true);
  let year = date.getFullYear();

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setTopOfPage(false);
    } else {
      setTopOfPage(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className={cn(
          "hidden md:flex md:flex-row md:justify-between py-5 px-16 animate-navbar-slide-down transition border-transparent duration-500 ease-in-out fixed w-full z-50",
          {
            "border-b": !topOfPage,
            "border-black/10": !topOfPage,
            "backdrop-blur-md": !topOfPage,
          }
        )}
      >
        <div className="flex flex-row space-x-16 items-center">
          <div className="flex flex-row space-x-2 items-center">
            <Link href="#init" scroll className="scroll-smooth">
              <Image
                src="/swiftrLogo.svg"
                alt="Swiftr Logo"
                width={30}
                height={30}
              />
            </Link>

            <Link href="#init" scroll className="scroll-smooth">
              <h3 className="font-bold text-base md:text-2xl text-black navtext">
                Swiftr
              </h3>
            </Link>
          </div>
          <div className="flex flex-row space-x-6">
            <Link
              href="#proceso"
              scroll
              className="transition-all text-black ease-in-out duration-300 hover:font-bold navtext font-semibold scroll-smooth"
            >
              Proceso
            </Link>

            <Link
              href="#contacto"
              scroll
              className="transition-all text-black ease-in-out duration-300 hover:font-bold navtext font-semibold scroll-smooth"
            >
              Contacto
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Link href="#contacto" scroll className="scroll-smooth">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Empieza Ahora
              </span>
            </button>
          </Link>
        </div>
      </section>
      {/* Mobile Navbar */}
      <section
        className={cn(
          "md:hidden z-50 animate-navbar-slide-down transition border-transparent duration-500 ease-in-out fixed w-full p-4 flex justify-between",
          {
            "border-b": !topOfPage,
            "border-black/10": !topOfPage,
            "backdrop-blur-md": !topOfPage,
          }
        )}
      >
        <Link href={"/"} className="navtext">
          <Image
            src="/swiftrLogo.svg"
            alt="Swiftr Logo"
            width={40}
            height={40}
          />
        </Link>
        <Sheet>
          <SheetTrigger className="text-black">
            <Menu className="w-8 h-8 text-black" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] bg-white/[0.96]">
            <div className="flex flex-row space-x-2 mb-20 items-center">
              <Image
                src="/swiftrLogo.svg"
                alt="Swiftr Logo"
                width={30}
                height={30}
              />
              <p className="font-bold tracking-tight text-black">Swiftr</p>
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="transition-all text-black ease-in-out duration-300 hover:font-bold"
              >
                Proceso
              </Link>

              <Link
                href="/"
                className="transition-all text-black ease-in-out duration-300 hover:font-bold"
              >
                Contacto
              </Link>
            </div>

            <div className="tracking-light font-semibold absolute bottom-8 text-black">
              Copyright © Swiftr {year}
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
}

export default NavbarSection;
