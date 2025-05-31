"use client";

import { useEffect, useRef, useState } from "react";
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

const links: LinkItem[] = [
  { href: "banner", icon: <AiOutlineHome />, labelKey: "home" },
  { href: "about", icon: <PiUserBold />, labelKey: "about" },
  { href: "experience", icon: <GiSkills />, labelKey: "experience" },
  { href: "services", icon: <FaServicestack />, labelKey: "service" },
  { href: "projects", icon: <SiPolymerproject />, labelKey: "projects" },
  { href: "contact", icon: <MdOutlineContacts />, labelKey: "contact" },
];

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const [activeSection, setActiveSection] = useState<string>("banner");
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      let current = "";
      for (let i = 0; i < links.length; i++) {
        const section = document.getElementById(links[i].href);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && top >= -section.offsetHeight / 2) {
            current = links[i].href;
            break;
          }
        }
      }

      setActiveSection(current || "banner");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial trigger

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      isClickScrolling.current = true; // lock scroll detection
      setActiveSection(id); // immediately highlight clicked item
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Unlock after scroll finishes (~700ms is enough for smooth scroll)
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-muted/80 backdrop-blur-md px-5 py-3 flex gap-2 rounded-full z-10 border border-border shadow-lg">
      {links.map(({ href, icon, labelKey }) => {
        const isActive = activeSection === href;
        return (
          <div key={href} className="relative">
            <button
              onClick={() => handleClick(href)}
              className={`p-3 rounded-full text-muted-foreground text-xl flex items-center transition-all duration-300 hover:bg-accent hover:text-accent-foreground ${
                isActive ? "bg-primary text-primary-foreground -translate-y-2" : ""
              }`}
            >
              {icon}
            </button>
            {isActive && (
              <span className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground px-2 py-1 rounded-md text-sm shadow-md">
                {t(labelKey)}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
