"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TextSliderLarge = () => {
  const pathname = usePathname();
  const isHomeSeven = pathname === "/index-seven";

  return (
    <section
      className={`text-slider-large-wrapper ${
        isHomeSeven ? " section pb-0" : ""
      }`}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={10000}
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
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Computer Vision">
                  {" "}
                  Computer Vision
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Large Language Model">
                  {" "}
                  Large Language Model
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Visual Language Model">
                  {" "}
                  Visual Language Model
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Pattern Recogniton">
                  {" "}
                  Pattern Recogniton
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Image Generation">
                  {" "}
                  Image Generation
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Text Generation">
                  {" "}
                  Text Generation
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Computer Vision">
                  {" "}
                  Computer Vision
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Large Language Model">
                  {" "}
                  Large Language Model
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Visual Language Model">
                  {" "}
                  Visual Language Model
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Pattern Recogniton">
                  {" "}
                  Pattern Recogniton
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Image Generation">
                  {" "}
                  Image Generation
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                {/* AI */}
                <span className="text-stroke" data-text="Text Generation">
                  {" "}
                  Text Generation
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TextSliderLarge;
