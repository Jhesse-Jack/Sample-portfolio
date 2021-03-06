import React from "react";
import "../App.scss";
import "../bootstrap.min.css";
import TPic from "../images/UGLogo.png";
import SPic from "../images/croppedprescrest.png";
import { MdDone } from "react-icons/md";

const SecondPart = () => (
  <div id="profile" className="rowgrey">
    <div>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <h3 className="cardalign border-0 card-header">
                {" "}
                PROFESSIONAL PROFILE <br />
              </h3>
              <div className="card">
                <div className="card-body">
                  <h4 className="cardaligntwo border-0 card-header">
                    {" "}
                    OBJECTIVES <br />
                  </h4>
                  <p className="textcolorchange card-text p-3">
                    I am a front-end developer with core principles in agile
                    software development and teamwork seeking to make a
                    difference in modern-day technology industry.
                    <br />
                  </p>
                  <br />
                  <div className="card">
                    <div className="card-body">
                      <h4 className="cardaligntwo border-0 card-header">
                        {" "}
                        INTERESTS & HOBBIES <br />
                      </h4>
                      <div className="textcolorchange card-text p-2">
                        &nbsp;{" "}
                        <p>
                          <MdDone /> &nbsp; Web Development{" "}
                        </p>
                        <p>
                          {" "}
                          <MdDone /> &nbsp; Adventure{" "}
                        </p>
                        <p>
                          {" "}
                          <MdDone /> &nbsp; Machine Learning{" "}
                        </p>
                        <p>
                          {" "}
                          <MdDone /> &nbsp; Modern Software practices{" "}
                        </p>
                        <p>
                          {" "}
                          <MdDone /> &nbsp; Music{" "}
                        </p>
                        <br />
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <h3 className="cardalign border-0 card-header">
                {" "}
                EDUCATION <br />{" "}
              </h3>
              <div className="card">
                <div className="textcolorchange card-body">
                  <br />
                  <div className="row">
                    <div className="col-lg-3 text-center text-lg-left">
                      <a href="https://www.ug.edu.gh">
                        <img
                          src={TPic}
                          alt="Tertiary school"
                          className="rounded-circle float-lg-right"
                          style={{ width: "85px", height: "87.5px" }}
                        />
                      </a>
                    </div>
                    <div className="col-lg-9 text-center text-lg-left">
                      <h5 className="font-weight-bold">
                        {" "}
                        University of Ghana{" "}
                      </h5>
                      <span>
                        <span className="small">
                          BSc. Computer Science
                          <br />
                        </span>
                        <span className="small">
                          September, 2015 - May, 2019
                          <br />
                        </span>
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-3 text-center text-lg-left">
                      <a href="https://www.preseclegon.edu.gh">
                        <img
                          src={SPic}
                          alt="Secondary school"
                          className="rounded-circle float-lg-right"
                          style={{ width: "85px", height: "87.5px;" }}
                        />
                      </a>
                    </div>
                    <div className="col-lg-9 text-center text-lg-left">
                      <h5 className="font-weight-bold">
                        {" "}
                        Presbyterian Boys' School{" "}
                      </h5>
                      <span>
                        <span className="small">
                          General Science
                          <br />
                        </span>
                        <span className="small">
                          October 2012 - May, 2015
                          <br />
                        </span>
                      </span>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
)

export default SecondPart
