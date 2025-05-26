"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineContacts } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaServicestack } from "react-icons/fa";
import { PiUserBold } from "react-icons/pi";
import { SiPolymerproject } from "react-icons/si";
import { useTranslation } from "react-i18next";

type LinkItem = {
  href: string;
  icon: React.ReactNode;
  labelKey: string;
};

const Navbar = () => {
  const pathname = usePathname();
  const { t } = useTranslation("navbar");

  const links: LinkItem[] = [
    { href: "/", icon: <AiOutlineHome />, labelKey: "home" },
    { href: "/about", icon: <PiUserBold />, labelKey: "about" },
    { href: "/services", icon: <FaServicestack />, labelKey: "service" },
    { href: "/experience", icon: <GiSkills />, labelKey: "experience" },
    { href: "/projects", icon: <SiPolymerproject />, labelKey: "projects" },
    { href: "/contact", icon: <MdOutlineContacts />, labelKey: "contact" },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-muted/80 backdrop-blur-md px-5 py-3 flex gap-2 rounded-full z-10 border border-border shadow-lg">
      {links.map(({ href, icon, labelKey }, index) => (
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
              {t(labelKey)}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
