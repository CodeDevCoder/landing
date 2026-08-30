"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition_component";

export const NavBar = () => {
  const router = usePathname()

  return (
    <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
          {itemsNavbar.map((item) => (
            <div key={item.id} className={`
                w-10 flex items-center justify-center transition duration-150 rounded-full cursor-pointer
                px-3 py-2 ${router === item.link && 'var(--bg-secondary)'}`}>
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};
