import Image from "next/image";
import Link from "next/link";
import Frame from "@/public/images/frame-one.png";

const ContactusBanner = () => {
  return (
    <section className="about-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-banner__content section__content">
              <span className="sub-title">Get in Touch</span>
              <h2 className="light-title title-animation fw-7 text-white">
               We Can Set You Apart From
              <span className="text-primary text-uppercase">The Flock</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Link className="scroll-position-btn" href="#scrollPosition">
        <Image src={Frame} alt="Image" priority />
        <i className="bi bi-arrow-right"></i>
      </Link>
    </section>
  );
};

export default ContactusBanner;
