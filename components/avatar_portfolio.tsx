"use client"

import Image from "next/image";
import { MotionTransition } from "./transition_component";

export const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 md:inline-block md:absolute hidden"
    >
      <Image
        src="/avatar-works.png"
        width={300}
        height={300}
        alt="Avatar portfolio"
        loading="eager"
        className="w-full h-full"
      />
    </MotionTransition>
  );
};
