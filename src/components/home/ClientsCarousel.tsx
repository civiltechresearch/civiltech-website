import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from "swiper/modules"

interface ClientsCarouselProps {
  clients: string[]
}

const ClientsCarousel = ({ clients }: ClientsCarouselProps) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000} // smooth continuous scroll
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        allowTouchMove={false} // purely auto scroll
        className="w-full"
      >
        {[...clients, ...clients].map((client, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                w-full text-center p-4
                hover:bg-secondary rounded-lg transition-colors
              "
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  {client
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                {client}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ClientsCarousel
