// import Image from "next/image";
import Link from "next/link";
// import poster from "@/public/images/case-details/poster.png";
// import one from "@/public/images/case-details/one.png";
// import two from "@/public/images/case-details/two.png";
// import three from "@/public/images/case-details/three.png";
// import quote from "@/public/images/case-details/quote.png";
// import attsense_product_poster from "@/public/images/services/attsense_product_poster.png";

const KudraatDetails = () => {
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
                          KUDRAAT
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-7">
                      <div className="case-meta-right justify-content-start justify-content-xl-end">
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Category</p>
                          <h5 className="fw-6 text-white">AI</h5>
                        </div>
                        <span className="line"></span>
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Tech</p>
                          <h5 className="fw-6 text-white">C and Python</h5>
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
                            Resistance Against Water-Base Crop Degradation
                          </h3>
                          <p>
                          Sugarcane industry is growing by 3.14% each year, which makes Sugarcane an important 
                          cash crop in India. Within this industry apart from sugar the other by products of sugarcane 
                          like Molasses, Ethanol and Bagasse are also gaining a good momentum.
                          </p>
                          <p>
                          Despite of that huge production, nearly 85% of sugarcane doesn’t even considered as healthy for extracting juice or
                          fiber due to SUCROSE DEGRADATION in post-harvesting , resulting 18-20 crores of loss annually for a mid sized Sugar 
                          mills and to the Farmers.

                          </p>
                        </div>
                        <div className="text-group slide-top">
                          <h3 className="title-animation fw-6 text-white mt-12">
                            Solutions And Innovations
                          </h3>
                          
                          <p>
                            In post-harvest lifecycle, crops are stacked into the field then it got transported to the mill 
                            for further nourishment before going to the conveyor belt. During Farm to Factory the moisture and 
                            temperature increases by 2-3 degree centigrade at the core of the stack causing degradation of sucrose 
                            at a quick rate, resulting a poor sugar recovery. 
                          </p>
                          <br/>
                          <p>
                          The whooping economical loss and growing concerns about crop wastage motivates 
                          us to come up with a simple yet first of it’s kind state-of-the-art ai trained 
                          crop detection and heat and moisture content monitor with HYDROPHILIC solution sprinkler 
                          the in the middle of the crop stack to recover water-based crop cycle in post-harvesting.
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

export default KudraatDetails;
