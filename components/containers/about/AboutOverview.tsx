import Image from "next/image";
import one from "@/public/images/o-one.png";
import two from "@/public/images/o-two.png";
import three from "@/public/images/o-three.png";

const AboutOverview = () => {
  return (
    <section className="section overview-two fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-7">
            <div className="section__header section__content text-center">
              <span className="sub-title">PURPOSE</span>
              <h2 className="title title-animation">
                Artificial Intelligence For Enterprises and Startups
              </h2>
              <p>
              Through Data Science and AI, Our Commitment is to Reshape Businesses at the Doorstep to bring Ease in Decision Making to make Human 
              Intelligence free from the Drudgery of Monotonous Work and Commit to the Pursuit of Imagination.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center gaper">
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={one} alt="Image" priority />
              </div>
              <div className="content">
                <h4 className="text-white">Analytics and Insights</h4>
                <p className="tertiary-text">
                Unlock the Full Potential by Improving Operational Efficiency, Enhancing Customer Satisfaction, or Innovation, These are the Key to Success in the AI-Driven World.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={two} alt="Image" priority />
              </div>
              <div className="content">
                <h4 className="text-white">Advance Programing</h4>
                <p className="tertiary-text">
                Incorporating Latest and Advanced Programming Techniques is Essential to Develop Cutting-Edge Solutions, Solve Complex problems to Stay Ahead of the Competition.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={three} alt="Image" priority />
              </div>
              <div className="content">
                <h4 className="text-white">Cloud AI Intergration</h4>
                <p className="tertiary-text">
                Combine AI applications into Cloud offers Scalability, Flexibility, Data Storage and Model Management, Enabling Businesses to Harness the Full Potential of AI Technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
