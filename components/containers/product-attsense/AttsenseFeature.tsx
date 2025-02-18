"use client";
// import { useState } from "react";
// import Link from "next/link";

const AttsenseFeature = () => {

  return (
    <section className="section pricing pricing--secondary pb-0 fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="section__header text-center">
              <span className="sub-title-two text-primary">Features</span>
              <h2 className="title  title-animation">Simple, Intutive and Innovative Biometric System</h2>
              <p>
                {" "}
                Gesture Controlled Facial Points Extraction and Recognition system for Real-Time Attendance
                with state-of-the-art Security Measures.

              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-start gaper">
          <div className="col-12 col-md-6">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text fw-5 stand">Real-Time Attendance</span>
                <p className="tertiary-text">
                Touchless and advanced facial recognition system that identify faces within seconds.
                </p>
              </div>
              <div className="pricing__content">
                <h5 className="fw-5 text-white">What&apos;s included</h5>
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Gesture Based Face Registration.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Algorithmic Clock-in and Clock-out.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Face Liveness Detection and Notification.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text fw-5 premium">Web Application</span>
                <p className="tertiary-text">
                  Fast and sleek web solution for tracking faces and generate attendance reports.
                </p>
              </div>
              <div className="pricing__content">
                <h5 className="fw-5 text-white">What&apos;s included</h5>
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    On and Off Premise Facial Attendance.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Live Location and GPS Tracking System.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Auto Generated Robust Reportings.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text fw-5 premium">Hardware Independent</span>
                <p className="tertiary-text">
                  Seemless Integration with any type of camera and any type of device.
                </p>
              </div>
              <div className="pricing__content">
                <h5 className="fw-5 text-white">What&apos;s included</h5>
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Works with existing Infrastructure.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    No Dedicated Hardware Installation needed.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Integrates with 3rd Party Services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text fw-5 stand">Secure Data Storage</span>
                <p className="tertiary-text">
                  Encrypted numerical value of multiple face representations in to secure cloud.
                </p>
              </div>
              <div className="pricing__content">
                <h5 className="fw-5 text-white">What&apos;s included</h5>
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Facial Data Encryption into Database.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Secured Cloud based Database Services.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Authentication tokens for App and API.
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

export default AttsenseFeature;
