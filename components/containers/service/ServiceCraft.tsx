import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/home-seven/six.png";

const ServiceCraft = () => {
  return (
    <section className="section craft craft-alt">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">CREATED WITH AI</span>
              <h2 className="title title-animation">
                Revolutionizing the User Experience Through AI
              </h2>
              <p>
                With User-Friendly Features and a Sleek Interface, Our AI
                Products Provides a Hassle-Free Experience. Businesses can Dive into a World of
                Latest and Evolving Technologies and Achive and Present an Impactful 
                Solutions while Sticking to the Basic Goal.
              </p>
              <div className="section__content-cta">
                <Link href="shop" className="btn btn--primary">
                  View Products
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={Thumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCraft;
