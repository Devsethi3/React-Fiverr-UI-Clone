import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <hr />
        <div className="container">
          <div className="footer-grid">
            <div className="group-1">
              <h4>Categories</h4>
              <span>Graphics Design</span>
              <span>Digital Marketing</span>
              <span>Writing & Translation</span>
              <span>Video & Animation</span>
              <span>Music & Audio</span>
              <span>Fiverr Logo Maker</span>
              <span>Programming & Tech</span>
              <span>Photography</span>
              <span>Business</span>
              <span>Lifestyle</span>
              <span>Sitemap</span>
            </div>
            <div className="group-2">
              <h4>About</h4>
              <span>Careers</span>
              <span>Press & News</span>
              <span>Partnership</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Investor Relations</span>
            </div>
            <div className="group-3">
              <h4>Support and Education</h4>
              <span>Help & Support</span>
              <span>Trust & Safety</span>
              <span>Selling on Fiverr</span>
              <span>Buying on Fiverr</span>
              <span>Fiverr Guides</span>
              <span>Fiverr Workspace</span>
            </div>
            <div className="group-4">
              <h4>Commmunity</h4>
              <span>Community Hub</span>
              <span>Forum</span>
              <span>Events</span>
              <span>Blogs</span>
              <span>Influencers</span>
              <span>Affiliates</span>
              <span>Podcast</span>
              <span>Invite a friend</span>
              <span>Become a Seller</span>
            </div>
            <div className="group-4">
              <h4>Business Soultions</h4>
              <span>About Business Solutions</span>
              <span>Fiverr Pro</span>
              <span>Fiverr Certified</span>
              <span>Fiverr Enterprise</span>
              <span>Contact Sales</span>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="left">
              <h2>
                fiverr<span>.</span>
              </h2>
              <p>&copy; Fiverr International Ltd. 2024</p>
            </div>
            <div className="right">
              <div className="social">
                <img src="/images/twitter.png" width="20" alt="" />
                <img src="/images/facebook.png" width="20" alt="" />
                <img src="/images/linkedin.png" width="20" alt="" />
                <img src="/images/pinterest.png" width="20" alt="" />
                <img src="/images/instagram.png" width="20" alt="" />
              </div>
              <div className="link">
                <img src="/images/language.png" width="20" alt="" />
                <span>English</span>
              </div>
              <div className="link">
                <img src="/images/coin.png" width="20" alt="" />
                <span>USD</span>
              </div>
              <div className="link">
                <img src="/images/accessibility.png" width="20" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
