import React from "react"
import "../App.scss"
import "../bootstrap.min.css"
import Carousel1 from "../images/gatsby-astronaut.png"
import Carousel2 from "../images/gatsby-icon.png"
import Carousel3 from "../images/no-image-available.webp"
//import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import WEPicOne from "../images/ipmc-ghana.jpg"
import Carousel from "react-bootstrap/Carousel"
import { MdDone } from "react-icons/md"
import WEPicTwo from "../images/no-image-available.webp"

const EighthPart = () => (
  <div className="rowgrey">
    <div className="row">
      <div className="col-lg-12 thirdpartheader">
        <h3> WORK EXPERIENCE </h3>
        <br />
      </div>
    </div>
    <div className="row">
      <Carousel>
        <Carousel.Item>
          <div className="col-sm-6 card-body">
            <div className="card">
              <div className="textcolorchange card-body">
                <br />
                <div className="row">
                  <div className="col-lg-3 text-center text-lg-left">
                    <a href="https://www.ipmcghana.com">
                      <img
                        src={WEPicOne}
                        alt="IPMC"
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
                        <p className="p-2">
                          {" "}
                          <MdDone /> &nbsp; Responsible for troubleshooting
                          sales’ department workers machines for networking
                          problems{" "}
                        </p>
                        <p className="p-2">
                          {" "}
                          <MdDone /> &nbsp; Networking tours to troubleshoot
                          areas where IPMC fixed networks are down with the
                          Enterprise Department
                        </p>
                        <p className="p-2">
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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="col-sm-6 card-body">
            <div className="card">
              <div className="textcolorchange card-body p-2">
                <br />
                <div className="row">
                  <div className="col-lg-3 text-center text-lg-left">
                    <a href="http://www.templedataghana.com">
                      <img
                        src={WEPicTwo}
                        alt="Temple Data Ghana"
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
                        <p className="p-2">
                          {" "}
                          <MdDone /> &nbsp; Responsible for understudying
                          ethernet cables and their termination techniques
                          according to industry standards and for research on
                          networking devices
                        </p>
                        <p className="p-2">
                          {" "}
                          <MdDone /> &nbsp; Learnt network topology design,
                          server setup and cable types and their setup
                        </p>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50" src={Carousel3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
)

export default EighthPart
