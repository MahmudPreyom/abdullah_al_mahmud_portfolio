"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineContacts } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaServicestack } from "react-icons/fa";
import { PiUserBold } from "react-icons/pi";
import { SiPolymerproject } from "react-icons/si";

type LinkItem = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const Navbar = () => {
  const pathname = usePathname();

  const links: LinkItem[] = [
    { href: "/", icon: <AiOutlineHome />, label: "Home" },
    { href: "/about", icon: <PiUserBold />, label: "About" },
    { href: "/services", icon: <FaServicestack />, label: "Service" },
    { href: "/experience", icon: <GiSkills />, label: "Experience" },
    { href: "/projects", icon: <SiPolymerproject />, label: "Projects" },
    { href: "/contact", icon: <MdOutlineContacts />, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-muted/80 backdrop-blur-md px-5 py-3 flex gap-2 rounded-full z-10 border border-border shadow-lg">
      {links.map(({ href, icon, label }, index) => (
        <div key={index} className="relative">
          <Link
            href={href}
            className={`p-3 rounded-full text-muted-foreground text-xl flex items-center transition-all duration-300 hover:bg-accent hover:text-accent-foreground ${
              pathname === href
                ? "bg-primary text-primary-foreground -translate-y-2"
                : ""
            }`}
          >
            {icon}
          </Link>
          {pathname === href && (
            <span className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground px-2 py-1 rounded-md text-sm shadow-md">
              {label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
