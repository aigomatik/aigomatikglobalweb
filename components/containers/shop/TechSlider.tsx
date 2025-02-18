"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/images/technology/one.png";
import two from "@/public/images/technology/two.png";
import three from "@/public/images/technology/three.png";
import four from "@/public/images/technology/four.png";
import five from "@/public/images/technology/five.png";
import six from "@/public/images/technology/six.png";
import seven from "@/public/images/technology/seven.png";
import eight from "@/public/images/technology/eight.png";
import nine from "@/public/images/technology/nine.png";
import ten from "@/public/images/technology/ten.png";

const TechSlider = () => {
  return (
    <div className="sponsor  overflow-hidden">
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        speed={8000}
        loop={true}
        roundLengths={true}
        centeredSlides={true}
        centeredSlidesBounds={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="sponsor__slider"
        breakpoints={{
          1200: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={one} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={two} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={three} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={four} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={five} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={six} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={seven} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={eight} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={nine} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={ten} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TechSlider;
