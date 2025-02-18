"use client";
// import { useState } from "react";
import Link from "next/link";

const ServicePlans = () => {

  return (
    <section className="section pricing pb-0 fade-wrapper pr-i">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="section__header text-center">
              <h2 className="title mt-12 title-animation">
                Solution For All In One Place
              </h2>
              <p>
                {" "}
                An Amulgation of every technical stack emerged as powerful resources for
                unleashing creative possibilities that transforming and enhance your productivity.
              </p>

            </div>
          </div>
        </div>
        <div className="row align-items-start gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text">Standard</span>

                <h2 className="light-title yearly">
                  Develop API
                </h2>

              </div>
              <hr />
              <div className="pricing__content">

                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Connect Apps with AI Services.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Secure and Encrypted Data Transfer.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Cost Effective and Clean Usage.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Empower Analytical or Real-Time Apps.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Build for Web, Mobile and IoTs.
                  </li>
                </ul>
              </div>
              <div className="pricing__cta section__cta">
                <Link href="contact-us" className="btn btn--secondary">
                  Expert Consultation
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single pricing__single-active topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text">Showstopper</span>
                <h2 className="light-title yearly">
                  Develop Web App
                </h2>

              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Planning Development Life-cycle.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Crafting Engaging User Interfaces.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Powers Up Apps Back-end Logic.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Setup and Monitor CI/CD Pipelines.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Maintain DataFlow using APIs.
                  </li>
                </ul>
              </div>
              <div className="pricing__cta section__cta">
                <Link href="contact-us" className="btn btn--primary">
                Expert Consultation
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text premium">Hero</span>

                <h2 className="light-title yearly">
                  Develop AI Model
                </h2>

              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Reliable and Scalable Solutions.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Develop AI from the Scratch.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Train, Test and Build Assists.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Support for Product Modernization.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Data-Driven Business Insights.
                  </li>
                </ul>
              </div>
              <div className="pricing__cta section__cta">
                <Link href="contact-us" className="btn btn--secondary">
                Expert Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
