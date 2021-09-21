import React from "react";
import "../styles/HomeBody/Internships.css";
import WorkFromHome from "../images/citiesimage/work_from_home.svg";
import Delhi from "../images/citiesimage/delhi_ncr.svg";
import Bangalore from "../images/citiesimage/bangalore.svg";
import Mumbai from "../images/citiesimage/mumbai.svg";
import Hyderabad from "../images/citiesimage/hyderabad.svg";
import Chennai from "../images/citiesimage/chennai.svg";
import Kolkata from "../images/citiesimage/kolkata.svg";
import International from "../images/citiesimage/international.svg";
import PartTime from "../images/categorieimage/part_time.svg";
import Engineering from "../images/categorieimage/engineering.svg";
import NGO from "../images/categorieimage/ngo.svg";
import MBA from "../images/categorieimage/mba.svg";
import Design from "../images/categorieimage/design.svg";
import Science from "../images/categorieimage/science.svg";
import Media from "../images/categorieimage/media.svg";
import Humanities from "../images/categorieimage/humanities.svg";
import ProgrammingPython from "../images/skills/programming_with_python.svg";
import DigitalMarketing from "../images/skills/digital_marketing.svg";
import WebDevelopment from "../images/skills/web_development.svg";
import MachineLearning from "../images/skills/machine_learning.svg";
import AdvancedExcel from "../images/skills/advanced_excel.svg";
import EthicalHacking from "../images/skills/ethical_hacking.svg";
import AutoCAD from "../images/skills/autocad.svg";
import CreativeWriting from "../images/skills/creative_writing.svg";
import CTC from "../images/fresher/ctc.svg";
import DreamCompanies from "../images/fresher/dream.svg";
import Verified from "../images/fresher/verified.svg";

function Internships() {
  return (
    <div className="internships">
      <h1>Internships</h1>
      <p>Apply to 10,000+ internships for free</p>
      <h3>Popular cities</h3>
      <div className="images">
        <div className="city">
          <img src={WorkFromHome} alt="Delhi NCR image" />
          <p>Work from home</p>
        </div>
        <div className="city">
          <img src={Delhi} alt="Delhi NCR image" />
          <p>Delhi/NCR</p>
        </div>
        <div className="city">
          <img src={Bangalore} alt="Delhi NCR image" />
          <p>Bangalore</p>
        </div>
        <div className="city">
          <img src={Mumbai} alt="Delhi NCR image" />
          <p>Mumbai</p>
        </div>
        <div className="city">
          <img src={Hyderabad} alt="Delhi NCR image" />
          <p>Hyderabad</p>
        </div>
        <div className="city">
          <img src={Chennai} alt="Delhi NCR image" />
          <p>Chennai</p>
        </div>
        <div className="city">
          <img src={Kolkata} alt="Delhi NCR image" />
          <p>Kolkata</p>
        </div>
        <div className="city">
          <img src={International} alt="Delhi NCR image" />
          <p>International</p>
        </div>
      </div>
      <h3>Popular categories</h3>
      <div class="images">
        <div className="city">
          <img src={PartTime} alt="Delhi NCR image" />
          <p>Part-time</p>
        </div>
        <div className="city">
          <img src={Engineering} alt="Delhi NCR image" />
          <p>Engineering</p>
        </div>
        <div className="city">
          <img src={NGO} alt="Delhi NCR image" />
          <p>NGO</p>
        </div>
        <div className="city">
          <img src={MBA} alt="Delhi NCR image" />
          <p>MBA</p>
        </div>
        <div className="city">
          <img src={Design} alt="Delhi NCR image" />
          <p>Design</p>
        </div>
        <div className="city">
          <img src={Science} alt="Delhi NCR image" />
          <p>Science</p>
        </div>
        <div className="city">
          <img src={Media} alt="Delhi NCR image" />
          <p>Media</p>
        </div>
        <div className="city">
          <img src={Humanities} alt="Delhi NCR image" />
          <p>Humanities</p>
        </div>
      </div>
      <h1>Internshala Trainings</h1>
      <p>Learn new-age skills on the go</p>
      <div className="images">
        <div className="city">
          <img src={ProgrammingPython} alt="Programming with python" />
          <p>Programming</p>
          <p>with Python</p>
        </div>
        <div className="city">
          <img src={DigitalMarketing} alt="Digital Marketing" />
          <p>Digital Marketing</p>
        </div>
        <div className="city">
          <img src={WebDevelopment} alt="Web Development" />
          <p>Web Development</p>
        </div>
        <div className="city">
          <img src={MachineLearning} alt="MachineLearning" />
          <p>MachineLearning</p>
        </div>
        <div className="city">
          <img src={AdvancedExcel} alt="Advanced Excel" />
          <p>Advanced Excel</p>
        </div>
        <div className="city">
          <img src={EthicalHacking} alt="Ethical Hacking" />
          <p>Ethical Hacking</p>
        </div>
        <div className="city">
          <img src={AutoCAD} alt="AutoCAD" />
          <p>AutoCAD</p>
        </div>
        <div className="city">
          <img src={CreativeWriting} alt="Creative Writing" />
          <p>Creative Writing</p>
        </div>
      </div>
      <div className="center">& 52 more ...</div>
      <h1>
        Fresher Jobs{" "}
        <button className="orange_button">
          <h2>New</h2>
        </button>
      </h1>
      <p>Premium fresher jobs on your fingertips</p>
      <div className="images__fresher">
        <div className="city">
          <img src={CTC} alt="CTC" />
          <p>Minimum CTC of 3 LPA</p>
        </div>
        <div className="city">
          <img src={DreamCompanies} alt="CTC" />
          <p>Dream companies</p>
        </div>
        <div className="city">
          <img src={Verified} alt="CTC" />
          <p>100% Verified Jobs</p>
        </div>
      </div>
    </div>
  );
}

export default Internships;
