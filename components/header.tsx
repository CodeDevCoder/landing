import { socialNetworks } from "@/data";
import { MotionTransition } from "./transition_component";
import Link from "next/link";
export const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-2 md:top-10 px-20"
    >
      <header>
        <div className="container justify-between mx-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-2 text-4xl font-bold text-center md:text-left">
              Code
              <span className="text-[#6F2DBD]">Dev</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-(--bg-secondary)"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};
