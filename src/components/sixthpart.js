import React from "react"
import {
  FaJira,
  FaGitAlt,
  FaConfluence,
} from "react-icons/fa"
import { DiSublime } from "react-icons/di"
import "../App.scss"
import { MdCall } from "react-icons/md"
import Mailto from "react-protected-mailto"
import { GoMail } from "react-icons/go"

const SixthPart = () => (
  <div id="tools" className="rowgrey">
    <div>
      <div className="col-lg-12 thirdpartheader">
        <h3> TOOLS I USE </h3>
        <br />
        <p> These are some tools I use in development. </p>
        <br />
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-2">
          <span className="small">
            <p className="reactico">
              {" "}
              <FaConfluence /> Confluence
            </p>
          </span>
        </div>
        <div className="col-sm-2">
          <span className="small">
            <p className="reactico">
              {" "}
              <FaJira /> Jira
            </p>
          </span>
        </div>
        <div className="col-sm-2">
          <span className="small">
            <p className="reactico">
              {" "}
              <FaGitAlt /> GitHub
            </p>
          </span>
        </div>
        <div className="col-sm-2">
          <span className="small">
            <p className="reactico">
              {" "}
              <DiSublime /> Sublime Text Editor{" "}
            </p>
          </span>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <hr className="dottedruletwo"/>
    </div>
    <br />
    <div className="row-12">
      <h3 className="text-center">
        {" "}
        I'm available for work, let's get in touch.{" "}
      </h3>
    </div>
    <br />
    <div className="row">
      <div className="col-sm-2 text-center"></div>
      <div className="col-sm-3 text-center p-0">
        <h4> Reach me on </h4>
        &nbsp;
        <p style={{color: "rgb(176,176,176)"}}>
          {" "}
          <MdCall /> <Mailto tel="+233-20-066-8946" />
        </p>
        <p style={{color: "rgb(176,176,176)"}}>
          {" "}
          <MdCall /> <Mailto tel="+233-55-012-4060" />
        </p>
      </div>
      <div className="col-sm-3 text-center p-0">
        <h4> Kindly mail me </h4>
        &nbsp;
        <p style={{color: "rgb(176,176,176)"}}>
          {" "}
          <GoMail />
          <Mailto
            email="armahjames9@gmail.com"
            headers={
              ({ subject: "Question from the website" },
              { cc: "friend@gmail.com" })
            }
          />
        </p>
        <p style={{color: "rgb(176,176,176)"}}>
          {" "}
          <GoMail />
          <Mailto
            email="jamesarmah79@gmail.com"
            headers={
              ({ subject: "Question from the website" },
              { cc: "friend@gmail.com" })
            }
          />
        </p>
      </div>
    </div>
    <hr className="dottedruletwo"/>
  </div>
)
export default SixthPart
