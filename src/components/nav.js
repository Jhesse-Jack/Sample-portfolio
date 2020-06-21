import React from "react";
import "../components/firstpart";
import "../components/secondpart";
import "../components/thirdpart";
import "../components/fourthpart";
import "../components/fifthpart";
import "../components/sixthpart";
import "./nav.scss";
import "../bootstrap.min.css";
import "../App.scss";
import { BsInfo } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";
import { DiCode } from "react-icons/di";
import { MdWork } from "react-icons/md";
import { GoProject, GoTools } from "react-icons/go";

const Nav = () => (
  <div>
      <div className="nav row">
        <div className="col-sm-5"></div>
        <div className="col-sm-1">
          <span className="nav-list-item small">
              <a style={{color:"black"}} href="#introduction">
                  <BsInfo /> <span className="faviconfont"> INTRO </span>
              </a>
          </span>
        </div>
        <div className="col-sm-1">
          <span className="nav-list-item small">
            <a style={{color:"black"}} href="#profile">
                <AiOutlineProfile /> <span className="faviconfont"> PROFILE </span>
            </a>
          </span>
        </div>
        <div className="col-sm-1">
          <span className="nav-list-item small">
            <a style={{color:"black"}} href="#skills">
                <DiCode /> <span className="faviconfont"> SKILLS </span>
            </a>
          </span>
        </div>
        <div className="col-sm-1">
          <span className="nav-list-item small">
            <a style={{color:"black"}} href="#workexperience">
                <MdWork /> <span className="faviconfont"> WORK EXPERIENCE </span>
            </a>
          </span>
        </div>
        <div className="col-sm-1">
            <span className="nav-list-item small">
                <a style={{color:"black"}} href="#projects">
                    <GoProject /> <span className="faviconfont"> PROJECT </span>
                </a>
            </span>
        </div>
        <div className="col-sm-1">
            <span className="nav-list-item small">
                <a style={{color:"black"}} href="#tools">
                    <GoTools /> <span className="faviconfont"> TOOLS </span>
                </a>
            </span>
        </div>
        <div className="col-sm-1"></div>
      </div>
    <br />
  </div>
)

export default Nav