import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              A picture tells a thousand stories, here are some pictures of various qualification and bits n' bobs.
            </p>
            <p>
              Click on the picture to enlarge
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/iapt.jpg"
                      target="_blank"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>IAPT Membership</h4>
                      </div>
                      <img
                        src="img/portfolio/iapt_s.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/coru.jpg"
                      target="_blank"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>CORU Membership</h4>
                      </div>
                      <img
                        src="img/portfolio/coru_s.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/clinic.jpg"
                      target="_blank"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Clinic</h4>
                      </div>
                      <img
                        src="img/portfolio/clinic_s.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/card.jpg"
                      target="_blank"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Business Card</h4>
                      </div>
                      <img
                        src="img/portfolio/card_s.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/goto.jpg"
                      target="_blank"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>The Go To Physio</h4>
                      </div>
                      <img
                        src="img/portfolio/goto_s.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/fcard.jpg"
                      target="_blank"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Podiatry</h4>
                      </div>
                      <img
                        src="img/portfolio/fcard_s.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/2006.jpg"
                      target="_blank"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>IAPT Qaulification</h4>
                      </div>
                      <img
                        src="img/portfolio/2006_s.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/ex4.png"
                      target="_blank"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Working it</h4>
                      </div>
                      <img
                        src="img/portfolio/ex4_s.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/ex1.png"
                      target="_blank"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Balancing Act</h4>
                      </div>
                      <img
                        src="img/portfolio/ex1_s.png"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
