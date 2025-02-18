"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ProductTextSlider = () => {
  return (
    <section className="text-slider-large-wrapper alter-text-large">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={8000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="text-slider-large"
      >
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">Product</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <span className="text-stroke" data-text="Real Time">
                {" "}
                Real Time
              </span>
            </h2>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">Service</h2>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <span className="text-stroke" data-text="Easy">
                {" "}
                Easy
              </span>
            </h2>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">Service</h2>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <span className="text-stroke" data-text="Cost Effective">
                {" "}
                Cost Effective
              </span>
            </h2>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">Service</h2>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <span className="text-stroke" data-text="Fast">
                {" "}
                Fast
              </span>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductTextSlider;
