import React from "react";
import "../bootstrap.min.css";
import "../App.scss";
import "./nav.scss";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";

const FirstPart = () => (
  <div className="wholesection">
    <div id="introduction" className=" firsttest container">
      <div className="test rounded-circle"></div>
      <div className="nexttest align-items-center">
        <h1 className="styledheaders"> Hi, <span className="myfont"> I'm JAMES ARMAH </span></h1>
        <h3 className="styledheaders"> An <span> AGILE DEV OPS GUIDE </span> &amp; </h3>
        <h5 className="styledheaders"> A <span className="faviconfont"> Front End Developer </span></h5>
      </div>
      <br />
      <div className="socialmediaicos">
        <a href="https://github.com/Jhesse-Jack"> <GoMarkGithub className="mediaicos"/> </a> &nbsp; &nbsp; &nbsp;
        <a href="https://www.linkedin.com/in/james-armah-46309a162"><FaLinkedin /></a> &nbsp; &nbsp; &nbsp;
        <a href="https://web.facebook.com/jesse.jack.619/"><FaFacebookSquare /></a> &nbsp; &nbsp; &nbsp;
        <a href="https://twitter.com/KC_Jesse_"><FaTwitter /></a> &nbsp; &nbsp; &nbsp;
      </div>
      <hr className="dottedrule" />
    </div>
  </div>
)

export default FirstPart
