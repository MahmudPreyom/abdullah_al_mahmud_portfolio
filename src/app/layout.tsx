// app/layout.tsx
// import { I18nextProvider } from "react-i18next";
import Navbar from "./components/Home/Navbar";
import { Providers } from "./components/shared/Providers";
import "./globals.css";
// import i18n from "@/i18n";
import I18nProviderWrapper from "./components/shared/I18nProviderWrapper";
import ScrollProgressBar from "./components/shared/ScrollProgressBar";

export const metadata = {
  title: "Abdullah Al Mahmud",
  description: "Created by Abdullah Al Mahmud",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <I18nProviderWrapper>
            <ScrollProgressBar />
            <Navbar />
            {children}
          </I18nProviderWrapper>
        </Providers>
      </body>
    </html>
  );
}
