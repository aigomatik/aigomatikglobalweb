import Image from "next/image";
import Link from "next/link";
import Counter from "../Counter";
import one from "@/public/images/s-j-thumb.png";
import two from "@/public/images/s-j-l-thumb.png";
import framer from "@/public/images/frame-one.png";

const ServiceJourney = () => {
  return (
    <section className="s-journey section hg-i" id="scrollPosition">
      <div className="container">
        <div className="row gaper align-items-center section__header--secondary">
          <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
            <div className="section__content">
              <h2 className="title mt-12 title-animation">
                A Journey of <span className="text-primary">AI Driven </span>
                Web Application and Products
              </h2>
              <p>
              Creating a web application using Latest and Fastest Technologies, with AI models integrated as APIs into the cloud, 
              is an exciting and multi-faceted journey.This involves a blend of frontend and backend development, cloud services, 
              and AI integration, making it a comprehensive and rewarding Product.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-4 offset-lg-1 col-xxl-3 offset-xxl-3">
            <div className="s-h-thumb parallax-img">
              <Image src={one} alt="Image" priority />
            </div>
          </div>
        </div>
        <div className="row gaper align-items-end">
          <div className="col-12 col-lg-8 col-xxl-9">
            <div className="w-r">
              <div className="s-journey__thumb reveal-img parallax-img">
                <Image src={two} alt="Image" priority />
              </div>
              <Link className="scroll-position-btn" href="services">
                <Image src={framer} alt="Image" priority />
                <i className="bi bi-arrow-left"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xxl-3">
            <div className="s-journey__content">
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={4} />
                  </span>
                  <span className="prefix"> +</span>
                </h2>
                <p className="primary-text">Years of Experience</p>
              </div>
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={30} />
                  </span>
                  <span className="prefix"> %</span>
                </h2>
                <p className="primary-text">Faster Delivery</p>
              </div>
              <div className="counter__single">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={85} />
                  </span>
                  <span className="prefix"> %</span>
                </h2>
                <p className="primary-text">Client Recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceJourney;
