import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="container">
          <div className="featured-container">
            <div className="featured-content">
              <h1>Find the perfect <span>freelance</span> services for you business</h1>
              <div className="search">
                <div className="search-input">
                  <img src="/images/search.png" alt="" />
                  <input type="text" placeholder="Try building Mobile App" />
                </div>
                <button>Search</button>
              </div>
              <div className="popular">
                <span>Popular :</span>
                <button className="popular-button">Web Design</button>
                <button className="popular-button">Motion Graphics</button>
                <button className="popular-button">Logo Design</button>
                <button className="popular-button">Ai Services</button>
                <button className="popular-button">Data Entry</button>
              </div>
            </div>
            <img src="/images/man.png" alt="" className="home-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
