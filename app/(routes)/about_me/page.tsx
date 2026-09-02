import { Avatar } from "@/components/avatar";
import { ContainerPage } from "@/components/container";
import { ConterServices } from "@/components/counter_services";
import { CoverParticles } from "@/components/CoverParticles";
import { TimeLine } from "@/components/time_line";
import { TransitionPage } from "@/components/transition_page";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-2">
          Toda mi{" "}
          <span className="text-(--bg-secondary) font-bold">
            Trayectoria Profesional
          </span>
        </h1>

        <ConterServices />
        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;
