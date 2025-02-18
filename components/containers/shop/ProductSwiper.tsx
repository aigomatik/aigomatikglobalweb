"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/product-swiper/one.png";
import two from "@/public/images/product-swiper/two.png";
import three from "@/public/images/product-swiper/three.png";
import four from "@/public/images/product-swiper/four.png";
import five from "@/public/images/product-swiper/five.png";

const ProductSwiper = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <section className="section h-s-case hg-i">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="section__header text-center">
              <h2 className="mt-12 title title-animation">Find an Ai Solution For Your Business</h2>
              <p>
              We provide Impactful Business Solutions to Systemize Decision Making process using Latest and Evolving Technologies while Sticking to the Basic Goal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-s-case-wrapper">
        <div
          className={
            "h-s-case-single" +
            (isActive === 0 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(0)}
        >
          <div className="thumb">
            <Image src={one} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="product-attsense">ATTSENSE</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
                A Real-Time Gesture based Face Attendance System, Crafted to handle Face Detection within 
                seconds using existing Camera setup. 
              </p>
              <Link href="product-attsense" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 1 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(1)}
        >
          <div className="thumb">
            <Image src={two} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="product-dioscrm">DIOS CRM</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
              It&#39;s a Advance Tool Designed to Help Businesses Manage and Analyze Customer Interactions and Data throughout the Customer Lifecycle.
              </p>
              <Link href="product-dioscrm" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 2 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(2)}
        >
          <div className="thumb">
            <Image src={three} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="product-starllm">STAR LLM</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
               An advanced Coming of Edge Multi Layerd Product using Artificial Intelligence, Designed to Interact and Generate human-like text on Financial Data.
              </p>
              <Link href="product-starllm" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 3 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(3)}
        >
          <div className="thumb">
            <Image src={four} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="product-datacorrel">DATA CORREL</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
                AI-powered Data De-Duplication tool for Finding and Clustering Duplicate Data from a vast Amount of Highly Unstructured and Wrangled Dataset. 
              </p>
              <Link href="product-datacorrel" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            "h-s-case-single" +
            (isActive === 4 ? " h-s-case-single-active" : " ")
          }
          onClick={() => setIsActive(4)}
        >
          <div className="thumb">
            <Image src={five} alt="Image" priority />
          </div>
          <div className="h-case-content">
            <div className="case-title">
              <h2 className="light-title">
                <Link href="product_kudraat">KUDRAAT</Link>
              </h2>
            </div>
            <div className="h-c-continent">
              <p>
                It&#39;s a state-of-art AI integrated Sensor based Product which helps to Increase Crops Life by Hydrating them using a Hydrophilic Solution during Post Harvesting period. 
              </p>
              <Link href="product_kudraat" className="cta">
                <span className="arrow"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSwiper;
