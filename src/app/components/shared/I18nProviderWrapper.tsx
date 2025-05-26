/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

export default function I18nProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Set direction attribute based on current language
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
  }, [i18n.language]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
