import React from "react";
import "../styles/Footer/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="disable footer__top__section">
          <h5>Internships by places</h5>
          <a href="#">
            <p>Internship in India</p>
          </a>
          <a href="#">
            <p>Internship in Delhi</p>
          </a>
          <a href="#">
            <p>Internship in Bangalore</p>
          </a>
          <a href="#">
            <p>Internship in Hyderabad</p>
          </a>
          <a href="#">
            <p>Internship in Mumbai</p>
          </a>
          <a href="#">
            <p>Internship in Chennai</p>
          </a>
          <a href="#">
            <p>Internship in Gurgaon</p>
          </a>
          <a href="#">
            <p>Internship in Kolkata</p>
          </a>
          <a href="#">
            <p>Virtual internship</p>
          </a>
        </div>
        <div className="disable footer__top__section">
          <h5>Internships by Stream</h5>
          <a href="#">
            <p>Computer Science Internship</p>
          </a>{" "}
          <a href="#">
            <p>Electronics Internship</p>
          </a>{" "}
          <a href="#">
            <p>Mechanical Internship</p>
          </a>{" "}
          <a href="#">
            <p>Civil Internship</p>
          </a>{" "}
          <a href="#">
            <p>Marketing Internship</p>
          </a>{" "}
          <a href="#">
            <p>Chemical Internship</p>
          </a>
          <a href="#">
            <p>Finance Internship</p>
          </a>{" "}
          <a href="#">
            <p>Summer Research Fellowship</p>
          </a>{" "}
          <a href="#">
            <p>Campus Ambassador Program</p>
          </a>
        </div>
        <div className="visible__top footer__top__section">
          <h5>
            Online Trainings <button className="orange__button">OFFER</button>
          </h5>
          <a href="#">
            <p>Programming with Python</p>
          </a>{" "}
          <a href="#">
            <p>Digital Marketing</p>
          </a>{" "}
          <a href="#">
            <p>Web Development</p>
          </a>{" "}
          <a href="#">
            <p>Machine Learning</p>
          </a>{" "}
          <a href="#">
            <p>Advanced Excel</p>
          </a>{" "}
          <a href="#">
            <p>Ethical Hacking</p>
          </a>{" "}
          <a href="#">
            <p>AutoCAD</p>
          </a>{" "}
          <a href="#">
            <p>Creative Writing</p>
          </a>
          <a href="#">
            <p>Data Science</p>
          </a>
        </div>
        <div className="visible__bottom footer__top__section">
          <h5>About Internshala</h5>
          <a href="#">
            <p>About us</p>
          </a>{" "}
          <a href="#">
            <p>We're hiring</p>
          </a>{" "}
          <a href="#">
            <p>Hire interns for your company</p>
          </a>{" "}
          <a href="#">
            <p>Team Diary</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>{" "}
          <a href="#">
            <p>Our Services</p>
          </a>{" "}
          <a href="#">
            <p>Terms & Conditions</p>
          </a>{" "}
          <a href="#">
            <p>Privacy</p>
          </a>{" "}
          <a href="#">
            <p>Contact us</p>
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__left">
          <button className="black__button">
            <i class="fab fa-google-play"></i>Get Android App
          </button>
          <div className="footer__bottom__icons">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>
        <div className="footer__bottom__right"></div>
      </div>
    </div>
  );
}

export default Footer;
