import React from "react"
import "../App.scss"
import "../bootstrap.min.css"
import { MdDone } from "react-icons/md"

const FifthPart = () => (
  <div id="projects" className="rowwhite">
    <div>
      <div className="row">
        <div className="col-lg-12 thirdpartheader">
          <h3> PROJECTS </h3>
          <br />
          <p>
            {" "}
            These are two very fine projects I've actively partaken in. Please
            feel free to contact me on the projects for more info.{" "}
          </p>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2 card-body"></div>
        <br />
        <div className="col-sm-4 card-body">
          <div className="card">
            <div className="textcolorchange card-body">
              <br />
              <div className="row">
                <div className="col-lg-12 text-lg-center">
                  <h5 className="font-weight-bold"> Quizbee </h5>
                  <span>
                    <span className="small">
                      <h6> November - December, 2017 </h6>
                    </span>
                    <span className="small">
                      <h6> Main technologies used: JavaScript, PHP </h6>
                    </span>
                    <span className="small">
                      <br />
                      <p className="p-1">
                        {" "}
                        <MdDone /> &nbsp; Built a quiz application that helps
                        students with their studies.
                      </p>
                      <p className="p-1">
                        {" "}
                        <MdDone /> &nbsp; The application was categorised into
                        the subjects you take.
                      </p>
                      <p className="p-1">
                        <MdDone /> &nbsp; The application also had tutorials
                        embedded in them on the various subjects.
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="col-sm-4 card-body">
          <div className="card">
            <div className="textcolorchange card-body">
              <br />
              <div className="row">
                <div className="col-lg-12 text-lg-center">
                  <h5 className="font-weight-bold">
                    {" "}
                    Football Player Positioning Prediction{" "}
                  </h5>
                  <span>
                    <span className="small">
                      <h6> August, 2018 - May, 2019 </h6>
                    </span>
                    <span className="small">
                      <h6> Main technologies used: RStudio, Matlab </h6>
                    </span>
                    <span className="small">
                      <br />
                      <p className="p-1">
                        {" "}
                        <MdDone /> &nbsp; Built a system that is able to predict
                        a football player's playing position using player
                        attributes / qualities.{" "}
                      </p>
                      <p className="p-1">
                        {" "}
                        <MdDone /> &nbsp; Both supervised and unsupervised
                        learning methods were used to train the data model and
                        predict on future player positions based on current
                        ones.
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="col-sm-2 card-body"></div>
      </div>
    </div>
  </div>
)

export default FifthPart
