/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import g1 from "../../../assets/gallery/IMG20200730180836-01.jpeg";
import g2 from "../../../assets/gallery/IMG20210726180036-01-01.jpeg";
import g3 from "../../../assets/gallery/IMG20210727180842-03-01-01.jpeg";
import g4 from "../../../assets/gallery/IMG20210730121353-01.jpeg";
import g5 from "../../../assets/gallery/IMG20210803180731-02.jpeg";
import g6 from "../../../assets/gallery/IMG20220519121059-01.jpeg";
import g7 from "../../../assets/gallery/gi2.jpg";
import g8 from "../../../assets/gallery/gti1.jpg";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import i18n from "@/i18n";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function Gallery() {
  const { t } = useTranslation("gallery");
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          ".carousel__cell",
          {
            opacity: 0,
            y: 50,
            rotateX: 15,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          }
        );
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          ".carousel__cell",
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
          }
        );
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, [i18n.language]);

  return (
    <section
      className="container mx-auto py-16 px-6 text-foreground"
      ref={containerRef}
    >
      <h5 className="text-center text-lg text-muted-foreground">
        {t("subtitle")}
      </h5>
      <h2 className="text-center text-4xl mt-1 font-bold md:mb-28 mb-16">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell number-slide1 ">
                <Image src={g1} alt="g1" />
              </div>
              <div className="carousel__cell number-slide2">
                <Image src={g2} alt="g2" />
              </div>
              <div className="carousel__cell number-slide6">
                <Image src={g6} alt="g6" />
              </div>
              <div className="carousel__cell number-slide3">
                <Image src={g3} alt="g3" />
              </div>
              <div className="carousel__cell number-slide6">
                <Image src={g7} alt="g7" />
              </div>
              <div className="carousel__cell number-slide4">
                <Image src={g4} alt="g4" />
              </div>
              <div className="carousel__cell number-slide6">
                <Image src={g8} alt="g8" />
              </div>
              <div className="carousel__cell number-slide5">
                <Image src={g5} alt="g5" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-muted-foreground leading-relaxed text mt-8 md:mt-0 md:text-base">
          <Typewriter
            key={i18n.language}
            words={[t("description")]}
            cursor
            loop={1}
            typeSpeed={10}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </div>
      </div>
    </section>
  );
}
