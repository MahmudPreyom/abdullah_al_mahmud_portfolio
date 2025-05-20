// app/layout.tsx
import Navbar from "./components/Home/Navbar";
import { Providers } from "./components/shared/Providers";
import "./globals.css";

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
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
