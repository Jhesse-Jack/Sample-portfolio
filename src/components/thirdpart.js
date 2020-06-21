import React from "react"
import "../App.scss"
import "../bootstrap.min.css"
import { MdDone } from "react-icons/md"

const ThirdPart = () => (
  <div id="skills" className="rowwhite">
    <div>
      <div className="row">
        <div className="col-lg-12 thirdpartheader">
          <h3> IT / TECHNICAL SKILLS </h3>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <h4 className="cardalign border-0 card-header">
                {" "}
                LANGUAGES & FRAMEWORKS <br />
              </h4>
              <div className="card">
                <div className="card-body">
                  <h5 className="cardaligntwo border-0 card-header">
                    {" "}
                    LANGUAGES <br />
                  </h5>
                  <div className="textcolorchange card-text p-2">
                    &nbsp;{" "}
                    <p>
                      {" "}
                      <MdDone /> &nbsp; HTML{" "}
                    </p>
                    <p>
                      {" "}
                      <MdDone /> &nbsp; CSS{" "}
                    </p>
                    <p>
                      {" "}
                      <MdDone /> &nbsp; JavaScript{" "}
                    </p>
                    <br />
                  </div>
                  <br />
                  <div className="card">
                    <div className="card-body">
                      <h4 className="cardaligntwo border-0 card-header">
                        {" "}
                        FRAMEWORKS <br />
                      </h4>
                      <div className="textcolorchange card-text p-2">
                        &nbsp;{" "}
                        <p>
                          {" "}
                          <MdDone /> &nbsp; React{" "}
                        </p>
                        <p>
                          {" "}
                          <MdDone /> &nbsp; Sass{" "}
                        </p>
                        <p>
                          {" "}
                          <MdDone /> &nbsp; Bootstrap{" "}
                        </p>
                        <p>
                          {" "}
                          <MdDone /> &nbsp; Gatsby{" "}
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
              <h5 className="cardalign border-0 card-header">
                {" "}
                MINOR TECH. EXPERIENCE <br />
              </h5>
              <div className="card">
                <div className="textcolorchange card-body">
                  <div className="col-sm">
                    <br />
                    <div>
                      <p>
                        {" "}
                        I have some minimal amount of exposure and experience
                        with the following tools and methods in the world of
                        technology{" "}
                      </p>
                      <br />
                    </div>
                    <div className="textcolorchange card-text">
                      <p>
                        {" "}
                        <MdDone /> &nbsp; MySQL{" "}
                      </p>
                      <p>
                        {" "}
                        <MdDone /> &nbsp; Network Topology Design{" "}
                      </p>
                      <p>
                        {" "}
                        <MdDone /> &nbsp; RStudio{" "}
                      </p>
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
              <h5 className="cardalign border-0 card-header">
                {" "}
                DEV OPS TOOLS{" "}
              </h5>
              <div className="card">
                <div className="textcolorchange card-body">
                  <div className="col-sm">
                    <br />
                    <div>
                      <p>
                        {" "}
                        I have had a sufficient amount of exposure and training
                        in the scrum methodology and can maximize the use of
                        these tools extensively{" "}
                      </p>
                      <br />
                    </div>
                    <div className="textcolorchange card-text">
                      <p>
                        <MdDone /> &nbsp; JIRA{" "}
                      </p>
                      <p>
                        <MdDone /> &nbsp; TRELLO{" "}
                      </p>
                      <p>
                        <MdDone /> &nbsp; CONFLUENCE{" "}
                      </p>
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
  </div>
)

export default ThirdPart
