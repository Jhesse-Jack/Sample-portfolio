import React from "react"
import "../App.css"
import "../bootstrap.min.css"
import WEPicOne from "../Images/ipmc-ghana.jpg"
import WEPicTwo from "../Images/no-image-available.webp"
import WEPicThree from "../Images/vodafone.jpg"
import { MdDone } from "react-icons/md"

const FourthPart = () => (
  <div id="workexperience" className="rowgrey">
    <div className="floatcontainer">
      <div className="row">
        <div className="col-lg-12 thirdpartheader">
          <h3> WORK EXPERIENCE </h3>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 card-body">
          <div className="card">
            <div className="textcolorchange card-body">
              <br />
              <div className="row">
                <div className="col-lg-3 text-center text-lg-left">
                  <a href="https://www.ipmcghana.com">
                    <img
                      src={WEPicOne}
                      alt="IPMC picture"
                      className="forimages rounded-circle float-lg-right"
                    />
                  </a>
                </div>
                <div className="col-lg-9 text-center text-lg-left">
                  <h5 className="font-weight-bold">
                    {" "}
                    Intercom Programming & Manufacturing Company{" "}
                  </h5>
                  <span>
                    <span className="small">
                      <h6> Intern, IT Office Support </h6>
                    </span>
                    <span className="small">
                      <h6> June, 2016 - August, 2016 </h6>
                    </span>
                    <span className="small">
                      <br />
                      <p>
                        {" "}
                        <MdDone /> &nbsp; Responsible for troubleshooting sales’
                        department workers machines for networking problems{" "}
                      </p>
                      <p>
                        {" "}
                        <MdDone /> &nbsp; Networking tours to troubleshoot areas
                        where IPMC fixed networks are down with the Enterprise
                        Department
                      </p>
                      <p>
                        {" "}
                        <MdDone /> &nbsp; Learnt how ERP works
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
        <div className="col-sm-6 card-body">
          <div className="card">
            <div className="textcolorchange card-body">
              <br />
              <div className="row">
                <div className="col-lg-3 text-center text-lg-left">
                  <a href="http://www.templedataghana.com">
                    <img
                      src={WEPicTwo}
                      alt="Temple Data Ghana Image"
                      className="forimages rounded-circle float-lg-right"
                    />
                  </a>
                </div>
                <div className="col-lg-9 text-center text-lg-left p-2">
                  <h5 className="font-weight-bold">
                    {" "}
                    Temple Data Corporate Office{" "}
                  </h5>
                  <span>
                    <span className="small">
                      <h6> Intern, Network Admin Support </h6>
                    </span>
                    <span className="small">
                      <h6> June, 2019 - August, 2019 </h6>
                    </span>
                    <span className="small">
                      <br />
                      <p>
                        {" "}
                        <MdDone /> &nbsp; Responsible for understudying ethernet
                        cables and their termination techniques according to
                        industry standards and for research on networking
                        devices
                      </p>
                      <p>
                        {" "}
                        <MdDone /> &nbsp; Learnt network topology design, server
                        setup and cable types and their setup
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 card-body">
        <div className="card">
          <div className="textcolorchange card-body">
            <br />
            <div className="row">
              <div className="col-lg-3 text-center text-lg-left">
                <a href="https://www.vodafone.com.gh">
                  <img
                    src={WEPicThree}
                    alt="Vodafone Ghana Image"
                    className="forimages rounded-circle float-lg-right"
                  />
                </a>
              </div>
              <div className="col-lg-9 text-center text-lg-left">
                <h5 className="font-weight-bold"> Vodafone Ghana </h5>
                <span>
                  <span className="small">
                    <h6> Service Personnel, Dev Ops Understudy </h6>
                  </span>
                  <span className="small">
                    <h6> September, 2019 - August, 2020 </h6>
                  </span>
                  <span className="small">
                    <br />
                    <p>
                      {" "}
                      <MdDone /> &nbsp; Researching on new scrum techniques in
                      the sofware agile methodology.{" "}
                    </p>
                    <p>
                      {" "}
                      <MdDone /> &nbsp; Acting as interim scrum master and
                      experiencing the feel of project management.{" "}
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
)

export default FourthPart
