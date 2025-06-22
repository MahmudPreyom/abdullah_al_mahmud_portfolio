"use client";
// import "./styles.css"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import g1 from "../../../assets/gallery/IMG20200730180836-01.jpeg"
import g2 from "../../../assets/gallery/IMG20210726180036-01-01.jpeg"
import g3 from "../../../assets/gallery/IMG20210727180842-03-01-01.jpeg"
import g4 from "../../../assets/gallery/IMG20210730121353-01.jpeg"
import g5 from "../../../assets/gallery/IMG20210803180731-02.jpeg"
import g6 from "../../../assets/gallery/IMG20220519121059-01.jpeg"
import g7 from "../../../assets/gallery/gi2.jpg"
import g8 from "../../../assets/gallery/gti1.jpg"
import { useTranslation } from "react-i18next";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function Gallery() {
  const { t } = useTranslation('gallery')
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (
    <section className="container mx-auto py-16 px-6 text-foreground">
      <h5 className="text-center text-lg text-muted-foreground">
        {t('subtitle')}
      </h5>
      <h2 className="text-center text-4xl mt-1 font-bold md:mb-28 mb-16">{t('title')}</h2>
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 "><Image src={g1} alt="g1"></Image></div>
          <div className="carousel__cell number-slide2"><Image src={g2} alt="g2"></Image></div>
          <div className="carousel__cell number-slide6"><Image src={g6} alt="g6"></Image></div>
          <div className="carousel__cell number-slide3"><Image src={g3} alt="g3"></Image></div>
          <div className="carousel__cell number-slide6"><Image src={g7} alt="g7"></Image></div>
          <div className="carousel__cell number-slide4"><Image src={g4} alt="g4"></Image></div>
          <div className="carousel__cell number-slide6"><Image src={g8} alt="g8"></Image></div>
          <div className="carousel__cell number-slide5"><Image src={g5} alt="g5"></Image></div>
        </div>
      </div>
    </div>
    </section>
  )
}
