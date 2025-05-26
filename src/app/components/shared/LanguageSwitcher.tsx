"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { resolvedTheme } = useTheme();

  // ✅ To avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    setMounted(true);
    setLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`relative rounded-full w-10 h-10 px-3 py-2 flex items-center justify-center
            ${
              isDark
                ? "bg-black border-[#0ff] text-[#0ff] shadow-[0_0_8px_2px_#0ff]"
                : ""
            }
            hover:scale-105 transition-all duration-300`}
        >
          <Globe className="w-5 h-5" />
          {/* Badge */}
          <span
            className={`absolute -top-1 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
              isDark
                ? "bg-[#0ff] text-black shadow-[0_0_5px_#0ff]"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {lang === "en" ? "EN" : lang === "bn" ? "BN" : "AR"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("bn")}>
          বাংলা
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ar")}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
