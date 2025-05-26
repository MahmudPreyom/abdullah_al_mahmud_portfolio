"use client";

import Link from "next/link";
import { Github, Facebook, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="shadow-2xl pb-32 pt-20 text-center bg-muted text-muted-foreground">
      <Link
        href="/"
        className="text-2xl font-semibold mb-6 inline-block text-foreground"
      >
        {t("name")}
      </Link>

      <div className="flex justify-center gap-4 mb-6">
        <Link
          href="https://web.facebook.com/mahmud.preyom"
          className="bg-background p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition"
        >
          <Facebook className="w-6 h-6 text-blue-600" />
        </Link>
        <Link
          href="https://github.com/MahmudPreyom"
          className="bg-background p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition"
        >
          <Github className="w-6 h-6 text-foreground" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCjMxx9QlxCZWbHELuvZxU5A"
          className="bg-background p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition"
        >
          <Youtube className="w-6 h-6 text-red-600" />
        </Link>
      </div>

      <div className="text-sm">
        <h5>
          &copy; {new Date().getFullYear()} {t("name")}. {t("copyright")}
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
