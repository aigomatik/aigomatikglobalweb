import Image from "next/image";
import ToolsThumb from "@/public/images/tools-thumb.png";

const Tools = () => {
  return (
    <section className="section tools pb-0">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-7">
            <div className="tools__thumb dir-rtl">
              <div className="reveal-img parallax-img">
                <Image src={ToolsThumb} alt="Image" className="unset" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-4 offset-xxl-1 order-first order-lg-last">
            <div className="section__content">
              <span className="sub-title">THE FUTURE</span>
              <h2 className="title title-animation">
              Unveil New Creative Horizons with AI Models
              </h2>
              <p>
              AI is at the Forefront of the Development of Autonomous Systems. These Systems Rely on Advanced AI Models to 
              Navigate their Surroundings, Analyze Data in Real-Time, and make Decisions without Human Intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
