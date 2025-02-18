"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/one.png";
import two from "@/public/images/overview/two.png";
import three from "@/public/images/overview/three.png";
import four from "@/public/images/overview/four.png";

const AboutTool = () => {
  const [isHover, setIsHover] = useState(0);
  return (
    <section className="section overview lilu-view">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">WHY AIGOMATIK</span>
              <h2 className="title title-animation">
               We Over Invest Our Time in Order To Deliver Great Results
              </h2>
              <p>
              Our expertise in ideation to tailored solution that fits client&#39;s needs, impact client&#39;s 
              bottom line, and pledge give a distinct advantage over client&#39;s competition. We deliver 
              end-to-end AI powered solutions by empowering our clients.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1 fade-wrapper">
            <div className="row gaper">
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 0 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(0)}
                >
                  <div className="overview__thumb">
                    <Image src={one} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Use Latest Technology</h4>
                    <p className="tertiary-text">
                    Utilize Techonolgy wisely with right amount of work and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 1 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(1)}
                >
                  <div className="overview__thumb">
                    <Image src={two} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Assured Timely Delivery</h4>
                    <p className="tertiary-text">
                    Maintain the balance of project quality and safety is the responsibility we take.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 2 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(2)}
                >
                  <div className="overview__thumb">
                    <Image src={three} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Rich Product Documentation</h4>
                    <p className="tertiary-text">
                      Knowledge Transfer and product documentation is our priority after delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 3 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(3)}
                >
                  <div className="overview__thumb">
                    <Image src={four} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>No Obligation Consultancy</h4>
                    <p className="tertiary-text">
                      We love to conduct a meetup to consult with our experts with the utmost safety of your idea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTool;
