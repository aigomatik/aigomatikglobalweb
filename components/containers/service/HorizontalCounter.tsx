import Image from "next/image";
import Counter from "../Counter";
import Star from "@/public/images/star-two.png";

const HorizontalCounter = () => {
  return (
    <section className="counter section pb-0 fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counter__inner">
              <div className="counter__single ">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={4} />
                  </span>
                  <span className="prefix"> +</span>
                </h2>
                <p className="primary-text">Years of Experience</p>
              </div>
              <div className="counter__single d-none d-xxl-block">
                <Image src={Star} alt="Image" priority />
              </div>
              <div className="counter__single ">
                <h2 className="light-title">
                  <span className="odometer"></span>
                  <Counter value={30} />
                  <span className="prefix"> %</span>
                </h2>
                <p className="primary-text">Fast Delivery</p>
              </div>
              <div className="counter__single d-none d-xxl-block">
                <Image src={Star} alt="Image" priority />
              </div>
              <div className="counter__single ">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={85} />
                  </span>
                  <span className="prefix"> %</span>
                </h2>
                <p className="primary-text">Client Recommendations</p>
              </div>
              <div className="counter__single d-none d-xxl-block">
                <Image src={Star} alt="Image" priority />
              </div>
              <div className="counter__single ">
                <h2 className="light-title">
                  <span className="odometer">
                    <Counter value={100} />
                  </span>
                  <span className="prefix"> %</span>
                </h2>
                <p className="primary-text">Safe Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCounter;
