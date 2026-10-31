"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

import a1 from "../../../assets/achievements/a1.png";
import a2 from "../../../assets/achievements/a2.jpeg";
import a3 from "../../../assets/achievements/a4.png";

type Achievement = {
  title: string;
  text: string;
};

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, i18n } = useTranslation("achievements");

  const images = [a1, a2, a3];
  const links = [
    "https://drive.google.com/file/d/1UC4HjF49zMo-mMkGIxod9Ee3BaEQIYQB/view",
    "https://drive.google.com/file/d/1HST4Yvb2T1K-KedNO4CGi9baHhpo1mtu/view",
    "https://drive.google.com/file/d/1RhoHgecDxg22rG43mBWxOqiucR9tQ1eK/view",
  ];

  const achievements = t("achievements", {
    returnObjects: true,
  }) as Achievement[];

  const achievementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.from(".achieve-swiper", {
          opacity: 0,
          x: -60,
          scale: 0.9,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.from(".achieve-text", {
          opacity: 0,
          x: 60,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.from(".achieve-swiper", {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 1,
          ease: "power2.out",
        });

        gsap.from(".achieve-text", {
          opacity: 0,
          y: 30,
          duration: 0.9,
          delay: 0.2,
          ease: "power2.out",
        });
      });

      return () => mm.revert();
    }, achievementRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={achievementRef}
      className="container mx-auto py-16 px-4 text-foreground"
    >
      <h5 className="text-center text-lg text-muted-foreground">
        {t("proof") || "Proof of Passion and Performance"}
      </h5>
      <h2 className="text-center text-4xl mt-1 font-bold mb-16">
        {t("title") || "My Achievements"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Swiper Carousel */}
        <div className="flex justify-center achieve-swiper">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Link href={links[index]} target="_blank">
                  <Image src={img} alt={`achievement-${index}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Area */}
        <div className="flex flex-col justify-center space-y-3 achieve-text">
          <h3 className="text-2xl md:text-3xl font-bold italic text-primary">
            <Typewriter
              key={`${activeIndex}-${i18n.language}`}
              words={[achievements[activeIndex]?.title || ""]}
              cursor
              loop={1}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={500}
            />
          </h3>

          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {achievements[activeIndex]?.text}
          </p>
        </div>
      </div>
    </section>
  );
}
