// import Image from "next/image";
import Link from "next/link";
// import poster from "@/public/images/case-details/poster.png";
// import one from "@/public/images/case-details/one.png";
// import two from "@/public/images/case-details/two.png";
// import three from "@/public/images/case-details/three.png";
// import quote from "@/public/images/case-details/quote.png";
// import attsense_product_poster from "@/public/images/services/attsense_product_poster.png";

const StarllmDetails = () => {
  return (
    <>
      <section className="section case-details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="case-details__inner">
                {/* <div className="poster-img mb-0 slide-top">
                  <Image src={poster} alt="Image" priority />
                </div> */}
                <div className="case-details-meta">
                  <div className="row gaper align-items-center">
                    <div className="col-12 col-xl-5">
                      <div className="case-meta-left">
                        <h2 className="title-animation fw-7 text-white">
                          STAR LLM
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-7">
                      <div className="case-meta-right justify-content-start justify-content-xl-end">
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Category</p>
                          <h5 className="fw-6 text-white">AI, API</h5>
                        </div>
                        <span className="line"></span>
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Tech</p>
                          <h5 className="fw-6 text-white">Python</h5>
                        </div>
                        {/* <span className="line"></span>
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Service</p>
                          <h5 className="fw-6 text-white">AI</h5>
                        </div>
                        <span className="line"></span> */}
                        {/* <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Website </p>
                          <h5 className="fw-6 text-white">lead.ai</h5>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="case-details__content sticky-parent">
                  <div className="row gaper">
                    <div className="col-12 col-lg-2">
                      <div className="case-d-content-left sticky-item">
                        <p className="tertiary-text text-white">Share</p>
                        <div className="social">
                          <Link
                            href="https://www.facebook.com/AigomatikglobalOfficial/"
                            target="_blank"
                            aria-label="share us on facebook"
                            title="facebook"
                          >
                            <i className="bi bi-facebook"></i>
                          </Link>
                          <Link
                            href="https://www.twitter.com/"
                            target="_blank"
                            aria-label="share us on twitter"
                            title="twitter"
                          >
                            <i className="bi bi-twitter"></i>
                          </Link>
                          <Link
                            href="https://www.linkedin.com/company/aigomatikglobalofficial/"
                            target="_blank"
                            aria-label="share us on pinterest"
                            title="linkedin"
                          >
                            <i className="bi bi-linkedin"></i>
                          </Link>
                          <Link
                            href="https://www.instagram.com/aigomatik_global?igsh=MTR4NXBzNXp0aXhuZQ=="
                            target="_blank"
                            aria-label="share us on instagram"
                            title="instagram"
                          >
                            <i className="bi bi-instagram"></i>
                          </Link>
                          <Link
                href="https://www.youtube.com/@aigomatikglobalofficial/"
                target="_blank"
                aria-label="share us on Youtube"
                title="instagram"
              >
                <i className="bi bi-youtube"></i>
              </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-10">
                      <div className="case-d-content-right sticky-item">
                        <div className="text-group slide-top">
                          <h3 className="title-animation fw-6 text-white mt-12">
                          Speak the Future: Harnessing Language Intelligence
                          </h3>
                          <p>
                          Businesses are constantly on the lookout for innovative solutions to stay ahead of the curve.
                          Enter Large Language Models (LLMs) and Visual Language Models (VLMs), a revolutionary technology that&#39;s transforming the language landscape.
                          These models, capable of understanding and generating human-like text, are unlocking a plethora of possibilities
                          for businesses across industries.

                          </p>
                        </div>
                        <div className="text-group slide-top">
                          <h3 className="title-animation fw-6 text-white mt-12">
                          Solutions And Innovations
                          </h3>
                          
                          <p>
                          Generating outputs from a diverse set of data, which covers several subjects and have several forms, like images, words, pdf and 
                          text can be a daunting task to handle. Without paying proper attention to each and every set of problems, providing a valid and 
                          consistent output is challenging.

                          </p>
                          <br/>
                          <p>
                          Star LLM is a product which aims to automate and optimize the output process, leveraging deep learning methods equipped with 
                          proper AI model to improve accuracy and relevance. It could be used as an API with any solutions.

                          </p>
                          
            
                        </div>
                        <div className="text-group slide-top">
                          {/* <div className="quote-group">
                            <Image src={quote} alt="Image" priority />
                            <div className="content">
                              <q className="primary-text text-white">
                                And the day came when the risk to remain tight
                                in a bud was more painful than the risk it took
                                to blossom.
                              </q>
                              <p className="tertiary-text">Alen Marlo</p>
                            </div>
                          </div> */}
                                         {/* <div className="poster poster-img slide-top">
                <Image src={attsense_product_poster} alt="Image" priority />
              </div> */}
                        </div>
                      </div>
                    </div>
       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>
        <div className="container">
          <hr className="horizon" />
        </div>
      </div> */}
    </>
  );
};

export default StarllmDetails;
