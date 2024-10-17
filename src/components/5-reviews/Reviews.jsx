import "./reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { reviews } from "../../data";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <Swiper
        className="swiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: -100,
          depth: 250,
          modifier: 10,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {reviews.map((item) => {
          return (
            <SwiperSlide key={item.date}>
              <ReviewCard
                name={item.name}
                stars={item.stars}
                date={item.date}
              />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          <button className="swiper-button-prev icon-arrow-circle-left"></button>

          <button className="swiper-button-next icon-arrow-circle-right"></button>
        </div>
      </Swiper>
    </section>
  );
}
