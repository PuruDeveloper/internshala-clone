import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/Header/Header.css";

function Header() {
  const [side, setSide] = useState(false);
  const sidebar = () => {
    setSide(!side);
    console.log(side);
  };
  return (
    <div className="header__width">
      <div className="header">
        <div className="header__left">
          <button className="visible__at__890" onClick={sidebar}>
            <i class="fas fa-bars"></i>
          </button>
          <img
            src="https://asset20.ckassets.com/resources/image/stores/internshala-coupons-1528715485.png"
            alt="internshala logo"
          ></img>
        </div>
        <div className="header__right">
          <div className="disable__at__890">
            <Navbar />
          </div>
          <p className="disable__at__890">Fresher Jobs</p>
          <button className="white__button disable__at__890">Login</button>
          <button className="blue__button">
            Register <i class="fas fa-chevron-down"></i>
          </button>
        </div>
        <div
          className={side === true ? "visible__sidebar" : "disable__sidebar"}
        >
          <button className="visible__at__890" onClick={sidebar}>
            <i class="far fa-times-circle"></i>
          </button>
          <Navbar />
          <a href="#">
            <p>WFH Internships</p>
          </a>
          <a href="#">
            <p>Fresher Jobs</p>
          </a>
          <a href="#">
            <p>Contact Us</p>
          </a>
          <a href="#">
            <p>Register - As a Student</p>
          </a>
          <a href="#">
            <p>Register - As an Employer</p>
          </a>
          <a href="#">
            <p>Login</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
