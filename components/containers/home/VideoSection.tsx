const VideoSection = () => {
  return (
    <section className="section video-s pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="video-s__inner">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9 col-xxl-7">
                  <div className="section__header text-center">
                    <h2 className="title mt-0 title-animation">
                      A Glimpse of Our Product
                    </h2>
                    <p>
                      ATTSENSE, leverages the Power of AI to provide Real-Time 
                      Gesture Based Facial Recognition Capabilities that Transcend 
                      Conventional Security Measures for Enterprises.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="video-s__content">
                    <video autoPlay loop muted controls>
                      <source src="/images/video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
