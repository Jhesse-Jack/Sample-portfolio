import React from "react";
import "../bootstrap.min.css";
import "../App.css";
import "./trial.css";

const FirstPart = () => (
  <div id="introduction" className=" firsttest container">
    <div className="test rounded-circle"></div>
    <div className="nexttest align-items-center">
      <h1 className="styledheaders"> Hi, <span className="myfont"> I'm JAMES ARMAH </span></h1>
      <h3 className="styledheaders"> An <span> AGILE DEV OPS GUIDE </span> &amp; </h3>
      <h5 className="styledheaders"> A <span className="faviconfont"> Front End Developer </span></h5>
    </div>
    <br />
    <div>
      <a href="https://github.com/Jhesse-Jack" style={{color:"rgb(184,184,184)"}}> github.com </a>
    </div>
    <hr className="dottedrule" />
  </div>
)

export default FirstPart
