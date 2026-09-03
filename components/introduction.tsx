"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export const Introduction = () => {
  return (
    <div className="z-20 w-full bg-(--bg-dark/60)">
      <div className="z-20 grid items-center h-full max-w-6xl gap-8 p-4 py-16 mx-auto sm:p-6 sm:py-20 md:grid-cols-2 md:gap-10 md:py-0">
        <Image
          src="/home-4.png"
          priority
          width="550"
          height="550"
          alt="Profile picture"
          className="w-full max-w-xs mx-auto sm:max-w-sm mt-5"
        />
        <div className="flex flex-col justify-center w-full max-w-md mx-auto">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes pensarlo,
            <TypeAnimation
              sequence={[
                "puedes programarlo.",
                1000,
                "puedes optimizarlo.",
                1000,
                "puedes implementarlo.",
                1000,
                "puedes desarrollarlo.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-(--bg-secondary)"
            />
          </h1>
          <p className="max-w-prose mx-auto mb-6 text-base break-words sm:text-xl md:mx-0 md:mb-8">
            Desaarrollador Front-End apasionado por tranformar ideas en código limpio y
            experiencias interactivas. Enfocado en el auto aprendizaje constante y en dominar
            herramientas modernas para construir interfaces eficientes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/portfolio"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </Link>

            <Link
              href="/contact_me"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md text-(--bg-secondary) border-(--bg-secondary) w-fit rounded-xl hover:shadow-xl hover:shadow-[#6F2BDB]"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
