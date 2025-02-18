import Image from "next/image";
import Link from "next/link";
import genThumb from "@/public/images/gen-two-thumb.png";

const GenerationTwo = () => {
  return (
    <section className="section gen-two pb-0">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 order-last order-lg-first">
            <div className="gen-two__thumb">
              <div className="reveal-img parallax-img">
                <Image src={genThumb} alt="Image" priority />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 col-xxl-5 offset-xxl-2">
            <div className="section__content">
              <span className="sub-title">AI PRODUCTS</span>
              <h2 className="title title-animation">
                Connect With The Easy to Use AI Products
              </h2>
              <p>
                Our AI Products are Pushing the Boundaries of
                Data Orchestration by Providing an Amalgamation of
                Web Application with Powerful AI to Unlock their true Potential.
              </p>
              <div className="section__content-cta">
                <Link href="shop" className="btn btn--primary">
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationTwo;
