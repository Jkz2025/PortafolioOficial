'use client'
import { usePathname } from "next/navigation";
import { itemsNavbar } from "../data";
import Link from "next/link";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <MotionTransition position='right' className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
          {itemsNavbar.map((item) => (
            <Link 
              key={item.id} 
              href={item.link}
              className={`py-2 px-3 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                pathname === item.link ? "bg-secondary" : ""
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;