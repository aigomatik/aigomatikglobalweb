import Image from "next/image";
import Link from "next/link";
// import poster from "@/public/images/services/poster.png";
import one from "@/public/images/services/info-one.png";
import two from "@/public/images/services/info-two.png";

const ServiceDetails = () => {
  return (
    <section className="section s-details sticky-parent">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-8">
            <div className="s-details__content sticky-item">
              {/* <div className="poster poster-img slide-top">
                <Image src={poster} alt="Image" priority />
              </div> */}
              {/* <div className="text-group slide-top">
                <p>
                  Welcome to our AI Image Generation website, where creativity
                  meets technology! Harnessing the power of artificial
                  intelligence, we bring you a world of limitless possibilities
                  for image creation and transformation. Our advanced
                  algorithms, including Generative Adversarial Networks, enable
                  us to generate stunning and realistic images that push the
                  boundaries of imagination. With AI-powered style transfer, you
                  can explore different artistic styles and transform your
                  photos into captivating works of art. Experience the magic of
                  super-resolution as we enhance the resolution and details of
                  your images, bringing them to life with astounding clarity.
                </p>
              </div> */}
              <div className="text-group slide-top">
                <h4><span className="text-primary">AIGOMATIK </span> Help Build Scalable AI Solutions Across The Businesses</h4>
                <p>
                We develop and deploy AI to strengthen data analysis and reconceptualize your offerings and operations with Computer Vision, 
                Recommendation System, Pattern Recognition, Anomaly Detection, LLMs and image and video analysis, to identify hidden patterns 
                in large data sets and uncover trends.
                </p>
                <p>
                The ecosystem allows businesses to realize their ideas by utilizing their understanding of their niches, 
                without needing to know the technical no-hows required at the infrastructural level.
                </p>
              </div>
              <div className="img-group fade-wrapper">
                <div className="poster-img mb-0 fade-top">
                  <Image src={one} alt="Image" priority />
                </div>
                <div className="poster-img mb-0 fade-top">
                  <Image src={two} alt="Image" priority />
                </div>
              </div>
              <div className="text-group slide-top">
                <p>
                In the competitive business landscape, staying in the lead requires innovation and productivity. Custom AI offers 
                a qualifiable approach to achieving these goals. Here are several compelling reasons why going for custom 
                AI solution can be revolutionary for your organization.
                </p>
                <ol>
                  <li>
                  <span className="text-primary">Tailored to Specific Needs: </span> Customized AI solutions are designed to address the unique challenges and requirements 
                  of a business, ensuring that the AI system aligns perfectly with the company&#39;s goals and processes.
                  </li>
                  <li>
                    {" "}
                    <span className="text-primary">Competitive Advantage: </span> Implementing advanced AI technologies can give businesses a competitive edge by enabling 
                    innovative solutions and optimizing operations.
                  </li>
                  <li>
                  <span className="text-primary">Data Security: </span> Customized AI solutions can be designed with robust security measures to protect sensitive business data 
                  and ensure compliance with regulatory requirements.
                  </li>
                  <li>
                  <span className="text-primary">Cost Savings: </span> By automating processes and improving efficiency, AI can help businesses reduce operational costs and allocate
                   resources more effectively.
                  </li>
                  <li>
                  <span className="text-primary">Flexibility and Adaptability: </span> Customized AI systems can be easily adapted to changing business needs and market conditions, 
                  ensuring that the AI solution remains relevant and effective over time.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="s-details__sidebar sticky-item">
              {/* <div className="s-details-single text-center slide-top sb-i">
                <h3 className="fw-7 text-white">Get the Service</h3>
                <div className="section__content-cta">
                  <Link href="sign-in" className="btn btn--primary">
                    Get Started
                  </Link>
                </div>
              </div> */}
              <div className="s-details-contact slide-top">
                <h3 className="text-white fw-7">Contact Us</h3>
                <ul className="section__content-cta">
                  <li>
                    <Link href="mailto:contact@aigomatikglobal.com">
                      <span className="material-symbols-outlined">mail</span>
                      contact@aigomatikglobal.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:1-658-361-253">
                      <span className="material-symbols-outlined">call</span>+91 99851 33383
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://maps.app.goo.gl/azVsUyEPxtiycRsm6"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      Shyamnagar Road, Satgachi, South DumDum, Kolkata, India, West Bengal, Pin: 700055
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
