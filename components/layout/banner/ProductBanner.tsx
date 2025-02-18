import Image from "next/image";
import thumb from "@/public/images/banner/product-thumb.png";

const ProductBanner = () => {
  return (
    <section className="service-banner">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-md-8">
            <div className="service-banner__content section__content">
              <span className="sub-title">Products</span>
              <h2 className="light-title title-animation fw-7 text-white">
              Achieve 100% Of Your <span className="text-uppercase">PRODUCT</span>{" "}
                <span className="text-primary text-uppercase">Idea</span>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className="service-banner__thumb parallax-img text-center">
              <Image src={thumb} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
