"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import { Autoplay, EffectFade } from "swiper/modules"

import heroBanner from "@/assets/hero-banner.jpg"
import heroBanner1 from "@/assets/hero-banner-1.jpg"
import heroBanner2 from "@/assets/hero-banner-2.jpg"
import heroBanner3 from "@/assets/hero-banner-3.jpg"
import heroBanner4 from "@/assets/hero-banner-4.jpg"
import heroBanner5 from "@/assets/hero-banner-5.jpg"

const HeroImageCarousel = () => {
  const images = [heroBanner3, heroBanner4, heroBanner2, heroBanner5]

  return (
    <div className="absolute inset-0 z-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1500} // smooth fade duration (1.5s)
        loop
        className="w-full h-screen"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={image}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroImageCarousel
