import React, { Component } from "react";
import "../components/firstpart";
import "../components/secondpart";
import "../components/thirdpart";
import "../components/fourthpart";
import "../components/fifthpart";
import "../components/sixthpart";

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {

  const show = (this.state.menu) ? "show" : "" ;

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex justify-content-end">
        <button className="navbar-toggler" type="button" onClick={ this.toggleMenu } style={{color: "#fff"}}>
          <span className="navbar-toggler-icon" style={{color: "#fff"}}></span>
        </button>
      </div>
      <div className="d-flex justify-content-end">
        <div className={"collapse navbar-collapse " + show} style={{transition: "all 4s ease-out"}}>
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#introduction"> INTRO <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#profile"> PROFILE </a>
            <a className="nav-item nav-link" href="#skills"> SKILLS </a>
            <a className="nav-item nav-link" href="#workexperience"> WORK EXPERIENCE </a>
            <a className="nav-item nav-link" href="#projects"> PROJECTS </a>
            <a className="nav-item nav-link" href="#tools"> TOOLS </a>
          </div>
        </div>
      </div>
    </nav>

  );
  }
}

