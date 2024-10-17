import "./reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function Reviews() {
  return (
    <section id="reviews" className="reviews ">
      <Swiper
        className="flex"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        <SwiperSlide>
          <ReviewCard name="Camel" stars={5} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard name="Jane Doe" stars={4} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard name="Jane " stars={4.5} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard name="Jane Doe" stars={3} />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard name="Jane " stars={5} />
        </SwiperSlide>
        <div className="slider-nav">
          <div className="swiper-button-prev">
            <button>prev</button>
          </div>
          <div className="swiper-button-next">
            <button>next</button>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
