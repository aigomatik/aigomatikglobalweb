"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/one.png";
import two from "@/public/images/overview/two.png";
import three from "@/public/images/overview/three.png";
import four from "@/public/images/overview/four.png";

const WorkProcess = () => {
  const [isHover, setIsHover] = useState(0);
  return (
    <section className="section overview lilu-view">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">WORKING PROCESS</span>
              <h2 className="title title-animation">
                We Empower Businesses Through Technology
              </h2>
              <p>
                Our Products developed with the unique industry specific needs which can be used for any sectors with a tailored price.
                We invested our industry knowledge for which clients can focus only on their bussinesses. Here&#39;s the core process that we 
                follow to develop solutions for Enterprises or Startups.
                
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
                    <h4>UI/UX Designing</h4>
                    <p className="tertiary-text">
                      Building conceptual wireframes and mockups, our team make certain the product becomes intuitive and visually appealing.
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
                    <h4>Development</h4>
                    <p className="tertiary-text">
                      We conduct Coding, Testing, Model building for a product, keeping our customers in loop to maintain transparency.
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
                    <h4>Deployment</h4>
                    <p className="tertiary-text">
                    We deploy your application to live environment ensuring scalable data processing across the product lifecycle.
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
                    <h4>Maintainance</h4>
                    <p className="tertiary-text">
                    We offer continuous support, ensures application remains updated, secure, and adaptable to evolving technologies.
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

export default WorkProcess;
