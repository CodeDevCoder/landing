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
          <h1 className="max-w-3xl mx-auto mt-8 mb-8 text-2xl font-bold leading-tight text-center break-words sm:text-3xl md:mb-5 md:text-4xl">
            Mis Últimos{' '}
            <span className="text-(--bg-secondary)">Proyectos Realizados</span>
          </h1>
          <div className="relative z-10 grid grid-cols-1 max-w-5xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4">
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
