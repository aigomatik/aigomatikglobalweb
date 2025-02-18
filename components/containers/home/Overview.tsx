"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/one.png";
import two from "@/public/images/overview/two.png";
import three from "@/public/images/overview/three.png";
import four from "@/public/images/overview/four.png";

const Overview = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(0);

  return (
    <section className="section overview pb-0 ">
      <div className="container">
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 0 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(0)}
            >
              <div className="overview__thumb">
                <Image src={one} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>Data Preparation</h4>
                <p className="tertiary-text">
                  With AI, We Can Effectively Use Unstructed Data into Various Data Structures. As Good Data is Essential for AI Systems to Function Correctly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 1 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(1)}
            >
              <div className="overview__thumb">
                <Image src={two} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>Model Selection</h4>
                <p className="tertiary-text">
                  Selecting proper AI Model, We can Help to Make More Accurate Predictions, Automate Repetitive Tasks, and Improve Decision-Making Processes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 2 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="overview__thumb">
                <Image src={three} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>Model Training</h4>
                <p className="tertiary-text">
                We Train Model using Minimum Computational Resources for Refining Parameters to Reduce the Gap Between Generated Output and Intended Result.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 fade-top">
            <div
              className={
                "overview__single " +
                (isOverviewOpen === 3 ? " overview__single-active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(3)}
            >
              <div className="overview__thumb">
                <Image src={four} alt="Image" priority />
              </div>
              <div className="overview__content">
                <h4>Model Deploy</h4>
                <p className="tertiary-text">
                  Deploying AI Model have a Critical Competitive Advantage for Businesses. We provide help to eliminate that complex task to retain the accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
