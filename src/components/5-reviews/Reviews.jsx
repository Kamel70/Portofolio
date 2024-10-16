import "./reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import "swiper/css";

export default function Reviews() {
  return (
    <section className="reviews">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
      </Swiper>
    </section>
  );
}
