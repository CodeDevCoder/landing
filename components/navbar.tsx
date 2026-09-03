"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition_component";

export const NavBar = () => {
  const router = usePathname()

  return (
    <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full px-2 mt-auto h-max bottom-6 sm:bottom-10">
      <nav>
        <div className="flex items-center justify-center max-w-full gap-2 px-3 py-1 overflow-x-auto rounded-full bg-white/15 backdrop-blur-sm sm:px-4">
          {itemsNavbar.map((item) => (
            <div key={item.id} className={`
                w-10 shrink-0 flex items-center justify-center transition duration-150 rounded-full cursor-pointer
                px-3 py-2 ${router === item.link && 'var(--bg-secondary)'}`}>
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};
