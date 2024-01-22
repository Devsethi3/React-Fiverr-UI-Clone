import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="features-grid-container">
            <div className="features-content">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="points">
                <div className="title">
                  <img src="/images/check.png" width="25" alt="" />
                  <span>The best for every budget</span>
                </div>
                <p>
                  Find the right service for every price point. No hourly rates,
                  just project-based pricing work done quickly.
                </p>
              </div>
              <div className="points">
                <div className="title">
                  <img src="/images/check.png" width="25" alt="" />
                  <span>Get quality work done quickly</span>
                </div>
                <p>
                  Hand your project over to a talented freelancer in minutes.
                </p>
              </div>
              <div className="points">
                <div className="title">
                  <img src="/images/check.png" width="25" alt="" />
                  <span>Pay when you're happy</span>
                </div>
                <p>
                  Upfront quotes mean no surprises. Payments only get released
                  approve project over to a talented freelancer in minutes.
                </p>
              </div>
              <div className="points">
                <div className="title">
                  <img src="/images/check.png" width="25" alt="" />
                  <span>Count on 24/7 support</span>
                </div>
                <p>
                  Our round-the-clock support team is available to help anytime,
                  anywhere project over to a talented freelancer.
                </p>
              </div>
            </div>
            <video
              src="/images/video.mp4"
              className="features-video"
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="business">
        <div className="container">
          <div className="business-grid-container">
            <div className="features-content">
              <h1 className="fiverr-heading">
                fiverr<span>.</span> business
              </h1>
              <h1>Advanced solutions and professional talent for businesses</h1>
              <div className="points">
                <div className="title">
                  <img src="/images/check.png" width="25" alt="" />
                  Connect to freelancers with proven business experience
                </div>
              </div>
              <div className="points">
                <div className="title">
                  <img src="/images/check.png" width="25" alt="" />
                  Upgrade to a curated experience packed with tools and
                  benefits, dedicated to businesses
                </div>
              </div>
              <div className="points">
                <div className="title">
                  <img src="/images/check.png" width="25" alt="" />
                  Get matched witht the perfect talent by a customer success
                  manager with trust
                </div>
              </div>
              <div className="points">
                <div className="title">
                  <img src="/images/check.png" width="25" alt="" />
                  Manage your freelance workforce and onboard additional talent
                  with an end-to-end SaaS solution
                </div>
              </div>
              <div className="points">
                <div className="title">
                  <img src="/images/check.png" width="25" alt="" />
                  Build your own branded marketplace of certified experts
                </div>
              </div>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              alt=""
              className="business-img"
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </>
  );
};

export default Home;
