import Image from "next/image";
import Link from "next/link";
import Frame from "@/public/images/frame-one.png";

const BlogBanner = () => {
  return (
    <section className="about-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-banner__content section__content">
              <span className="sub-title">Content Store</span>
              <h2 className="light-title title-animation fw-7 text-white">
               Industry Knowledge for
              <span className="text-primary text-uppercase">Technical Enhancement</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Link className="scroll-position-btn" href="#scrollPosition">
        <Image src={Frame} alt="Image" priority />
        <i className="bi bi-arrow-left"></i>
      </Link>
    </section>
  );
};

export default BlogBanner;
