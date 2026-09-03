import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    showDemo: boolean;
  };
}

export const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { title, image, urlGithub, urlDemo, showDemo } = data;

  return (
    <div className="p-4 border border-[#481D7A] rounded-xl backdrop-blur-sm">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        alt="Proyecto 1"
        width={400}
        height={400}
        className="w-full md:w-50 rounded-2xl h-auto"
      />
      <div className="flex gap-5 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 duration-150 rounded-lg bg-[#24292E] hover:bg-[#24292ECC]"
        >
          GitHub
        </Link>
        
        {showDemo !== false && (
          <Link
            href={urlDemo}
            target="_blank"
            className="p-2 duration-150 rounded-lg bg-(--bg-secondary) hover:bg-[#6F2DBDCC]"
          >
            Demo
          </Link>
        )}
      </div>
    </div>
  );
};
