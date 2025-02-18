import Image from "next/image";
import Link from "next/link";
// import poster from "@/public/images/case-details/poster.png";
// import one from "@/public/images/case-details/one.png";
// import two from "@/public/images/case-details/two.png";
// import three from "@/public/images/case-details/three.png";
// import quote from "@/public/images/case-details/quote.png";
import attsense_product_poster from "@/public/images/services/attsense_product_poster.png";

const AttsenseDetails = () => {
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
                          ATTSENSE
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-7">
                      <div className="case-meta-right justify-content-start justify-content-xl-end">
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Category</p>
                          <h5 className="fw-6 text-white">AI, Web App</h5>
                        </div>
                        <span className="line"></span>
                        <div className="case-meta-single">
                          <p className="tertiary-text text-primary">Tech</p>
                          <h5 className="fw-6 text-white">MERN Stack and Python</h5>
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
                            Gesture Based Facial Recognition Attendance System
                          </h3>
                          <p>
                          Employee attendance tracking on a daily basis is a critical practice 
                          for any organization. However, existing manual and fingerprint attendance management method
                          can be time-consuming and vulnerable to human errors. As an automated attendance-management system, 
                          Face Recognition Attendance System provides precise time records in milliseconds, reducing 
                          costly mistakes and save time for both the staffs and the organization.

                          </p>
                        </div>
                        <div className="text-group slide-top">
                          <h3 className="title-animation fw-6 text-white mt-12">
                          Solutions And Innovations
                          </h3>
                          
                          <p>Conventional system has no provision for newly developed needs of a workplace like hot-desking and other 
                          such as False Acceptance Rate (FAR) and False Rejection Rate (FRR) or accessing by an unauthorized person 
                          with the pain to maintain databases security and privacy.</p>
                          <br/>
                          <p>That&#39;s why we have developed an innovative solution, ATTSENSE that leverages state-of-the-art and highly 
                          customized face recognition technology to streamline your attendance tracking effortlessly while keeping the 
                          data privacy in mind.</p>
                          
            
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
                                         <div className="poster poster-img slide-top">
                <Image src={attsense_product_poster} alt="Image" priority />
              </div>
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

export default AttsenseDetails;
