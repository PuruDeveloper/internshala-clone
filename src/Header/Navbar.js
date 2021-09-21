import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "../styles/Header/Navbar.css";

function Navbar() {
  const [intern, setIntern] = useState(false);
  const internTrue = () => {
    setIntern(true);
  };
  const internFalse = () => {
    setIntern(false);
  };
  return (
    <div className="navbar">
      <a href="#" onMouseEnter={internTrue}>
        <p>
          Internships <i class="fas fa-chevron-down"></i>
        </p>
      </a>
      <a href="#">
        <p>
          Online Trainings <button className="orange__button">Offer</button>
          <i class="fas fa-chevron-down"></i>
        </p>
      </a>
      <div
        className={intern === true ? "visible__intern" : "disable__intern"}
        onMouseLeave={internFalse}
      ></div>
    </div>
  );
}

export default Navbar;
