import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import Shape from "@/public/images/footer/shape-one.png";

const Craft = () => {
  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">AI SERVICES</span>
              <h2 className="title title-animation">
                Scale Up Your Business with Artificial Intelligence
              </h2>
              <p>
              AI systems can Analyze Data, Recognize Patterns, Make Decisions, and even Adapt and Improve over time. 
              Whether it&#39;s LLMs, Speech Recognition, Image Processing, or Problem Solving. Integrating these Techniques 
              with World class Coding Infrastructure will put you Ahead of your Competitors. 
              </p>
              <div className="section__content-cta">
                <Link href="services" className="btn btn--primary">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={CraftThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>
    </section>
  );
};

export default Craft;
