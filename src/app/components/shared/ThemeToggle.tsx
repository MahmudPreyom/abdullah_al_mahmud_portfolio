"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2 rounded-full transition-all duration-300
        ${isDark ? "bg-black shadow-[0_0_8px_2px_#0ff]" : "bg-white shadow"}
        hover:scale-110`}
    >
      {isDark ? (
        <Moon className="text-[#0ff] animate-pulse" />
      ) : (
        <Sun className="text-yellow-500" />
      )}
    </button>
  );
};
