"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

interface CarouselProps {
  items: React.ReactNode[];
  slidesPerView?: number;
  autoplayDelay?: number;
  loop?: boolean;
  breakpoints?: Record<string, any>;
}

const Carousel = ({
  items,
  slidesPerView = 1,
  autoplayDelay = 3000,
  loop = true,
  breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  },
}: CarouselProps) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
      loop={loop}
      breakpoints={breakpoints}
      className="pb-12"
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
