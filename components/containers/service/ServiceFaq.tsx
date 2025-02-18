"use client";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { servicefaqData } from "@/public/data/service-faq";
import Image from "next/image";
// import Link from "next/link";
import Thumb from "@/public/images/h-empower-thumb.png";

const ServiceFaq = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(1);

  return (
    <section className="section h-empower fade-wrapper">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="h-empower__thumb reveal-img parallax-img">
              <Image src={Thumb} alt="Image" priority />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="section__content">
              <h2 className="title title-animation mt-12">
                Empowering Your Vision with our AI-Driven Solutions
              </h2>
              <p>
              Decisions taken by Leveraging the Industry needs will put you Ahead of your Competitors and 
              Open up a World of Possibilities to Leapfrog the Competitions.
              </p>
              <div className="h-empower-accordion">
                {servicefaqData.map((item) => {
                  return (
                    <div
                      className={
                        "h-empower-single fade-top" +
                        (faqOpen === item.id ? " h-empower-single-active" : " ")
                      }
                      key={item.id}
                    >
                      <div className="lefter">
                        <h3>{item.question}</h3>
                        <AnimateHeight
                          duration={300}
                          height={faqOpen == item.id ? "auto" : 0}
                        >
                          <p className="sho-item">{item.content}</p>
                        </AnimateHeight>
                      </div>
                      <div className="thumb">
                        <button
                          className="o-accordion"
                          onClick={() =>
                            setFaqOpen((prev) =>
                              prev == item.id ? null : item.id
                            )
                          }
                        >
                          <span className="material-symbols-outlined">
                            north_east
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <div className="section__cta text-start">
                <Link href="sign-in" className="btn btn--primary">
                  Get Started
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;
