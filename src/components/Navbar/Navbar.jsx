import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "Dev Sethi",
    isSeller: true,
  };

  return (
    <>
      <div className={active || pathname !== "/" ? "header active" : "header"}>
        <div className="container">
          <div className="navbar">
            <Link to="/">
              <div className="logo">
                <span className="text">fiverr</span>
                <span className="dot">.</span>
              </div>
            </Link>
            <div className="links">
              <span>Fiverr Business</span>
              <span>Explore</span>
              <span>English</span>
              <span>Sign In</span>
              {!currentUser?.isSeller && <span>Become a Seller</span>}
              {!currentUser && <button className="btn">Join</button>}
              {currentUser && (
                <div className="user" onClick={() => setOpen(!open)}>
                  <img
                    src="https://cdn.oneesports.gg/cdn-data/2022/02/Anime_DemonSlayer_Doma_EntertainmentDistrictArcFinale.webp"
                    alt=""
                    width="30"
                    height="30"
                  />
                  <span>{currentUser.userName}</span>
                  {open && (
                    <div className="options">
                      {currentUser?.isSeller && (
                        <>
                          <Link className="link" to="/mygigs">Gigs</Link>
                          <Link className="link" to="/add">Add New Gig</Link>
                        </>
                      )}
                      <Link className="link" to="/orders">Orders</Link>
                      <Link className="link" to="/messages">Messages</Link>
                      <Link className="link" to="/">Logout</Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {(active || pathname !== "/" ) && (
          <>
            <hr />
            <div className="menu container">
              <Link to="/">Graphics Design</Link>
              <Link to="/">Video & Animation</Link>
              <Link to="/">Writing & Translation</Link>
              <Link to="/">AI Service</Link>
              <Link to="/">Digial Marketing</Link>
              <Link to="/">Music & Audio</Link>
              <Link to="/">Programming & Tech</Link>
              <Link to="/">Business</Link>
              <Link to="/">Lifestyle</Link>
            </div>
            <hr />
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
