import { AvatarServices } from "@/components/avatar_services";
import { CoverParticles } from "@/components/CoverParticles";
import { RoundedImage } from "@/components/rounded_image";
import { SliderServices } from "@/components/slider_services";
import { TransitionPage } from "@/components/transition_page";

const PageServices = () => {
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <RoundedImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 px-20">
        <div className="max-w-112.5 mt-20 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis{" "}
            <span className="text-(--bg-secondary) font-bold">Servicios.</span>
          </h1>
          <p className="mb-8 text-xl text-gray-300">
            Enfoco mis habilidades en construir la capa visual e interactiva de la web. Me especializo en traducir ideas complejas
            en interfaces limpias, rápidas y accesibles, utilizando tecnologias modernas. Mi meta es asegurar que cada línea de código
            contribuya a una experiencia de usuario impecable.
          </p>
          <button className="px-3 py-2 rounded-lg bg-(--bg-secondary) hover:bg-[#481D7A] cursor-pointer font-semibold">
            Contacta conmigo
          </button>
        </div>
        {/* Slider */}
        <div className="">
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default PageServices;
