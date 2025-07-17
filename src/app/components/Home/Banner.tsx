"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Download, UserPlus } from "lucide-react";
import profile from "../../../assets/Adobe Express - file (15).png";
import middle from "../../../assets/middlepng.png";
import { ThemeToggle } from "../shared/ThemeToggle";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../shared/LanguageSwitcher";

const Banner = () => {
  const { t } = useTranslation();
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.from(".left-col", {
          opacity: 0,
          y: 100,
          rotateY: 45,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
        });

        gsap.from(".profile-image", {
          opacity: 0,
          scale: 0.7,
          rotateX: 45,
          duration: 1.5,
          ease: "back.out(1.7)",
          delay: 0.4,
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.from(".left-col", {
          opacity: 0,
          y: 50,
          duration: 1.1,
          ease: "power2.out",
          stagger: 0.15,
        });

        gsap.from(".profile-image", {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });
      });

      return () => mm.revert();
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bannerRef}
      className="banner-bg overflow-hidden relative transition-colors duration-300"
    >
      <div className="container mx-auto">
        {/* Theme Toggle */}
        <div className="flex md:ml-40 md:justify-center p-5 md:p-0 mt-0 md:mt-20 gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Column */}
          <div className="md:px-16 px-5 py-4 flex flex-col justify-center space-y-3">
            <p className="left-col text-muted-foreground text-4xl mb-3">
              {t("greeting")}
            </p>
            <h1 className="left-col text-5xl md:text-6xl font-semibold text-foreground">
              {t("name")}
            </h1>
            <h2 className="left-col text-muted-foreground text-2xl md:text-4xl font-medium">
              {t("article") + " "}
              <span className="font-bold italic text-primary">
                <Typewriter
                  words={[
                    t("typewriter.0"),
                    t("typewriter.1"),
                    t("typewriter.2"),
                    t("typewriter.3"),
                    t("typewriter.4"),
                  ]}
                  loop={100}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="left-col text-muted-foreground">
              {t("description")}
            </p>

            <div className="left-col flex gap-3 mt-6">
              <Link
                href="https://drive.google.com/file/d/1UhNTHlBDLPfAvST4uLTFDeht7bKtXHay/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground py-2 px-6 rounded-lg hover:bg-primary/90 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> {t("resume")}
              </Link>
              <Link
                href="#contact"
                className="bg-primary text-primary-foreground py-2 px-6 rounded-lg hover:bg-primary/90 transition flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" /> {t("hireMe")}
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:ml-auto flex justify-center">
            <div className="profile-image md:ml-60">
              <Image
                src={profile}
                alt="Abdullah Al Mahmud"
                style={{ width: "auto", maxHeight: "630px" }}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="banner-bg-center hidden md:block">
        <Image src={middle} alt="middle design" priority />
      </div>
    </div>
  );
};

export default Banner;