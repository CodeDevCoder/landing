import { AvatarPortfolio } from "@/components/avatar_portfolio";
import { ContainerPage } from "@/components/container";
// import { CoverParticles } from "@/components/CoverParticles";
import { PortfolioBox } from "@/components/portfolio_box";
import { RoundedImage } from "@/components/rounded_image";
import { TransitionPage } from "@/components/transition_page";
import { dataPortfolio } from "@/data";

const PagePortfolio = () => {
  return (
    <>
      {/* <CoverParticles /> */}
      <ContainerPage>
        <TransitionPage />
        <AvatarPortfolio />
        <RoundedImage />
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center mb-10 md:text-4xl md:mb-5 font-bold">
            Mis Últimos{' '}
            <span className="text-(--bg-secondary)">Proyectos Realizados</span>
          </h1>
          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto md:grid-cols-4 sm:grid-cols-2">
            {dataPortfolio.map((item: { id: number; title: string; image: string; urlGithub: string; urlDemo: string; }) => (
              <PortfolioBox key={item.id} data={item} />
            ))}
          </div>
        </div>
      </ContainerPage>
    </>
  );
};

export default PagePortfolio;
