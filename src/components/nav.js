import React, { Component } from "react";

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
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/">Features</a>
          <a className="nav-item nav-link" href="/">Pricing</a>
          <a className="nav-item nav-link" href="/">logout</a>
        </div>
      </div>
    </nav>

  );
  }
}

// import React from "react";
// import "../components/firstpart";
// import "../components/secondpart";
// import "../components/thirdpart";
// import "../components/fourthpart";
// import "../components/fifthpart";
// import "../components/sixthpart";
// import "./nav.scss";
// import "../bootstrap.min.css";
// import "../App.scss";
// import { BsInfo } from "react-icons/bs";
// import { AiOutlineProfile } from "react-icons/ai";
// import { DiCode } from "react-icons/di";
// import { MdWork } from "react-icons/md";
// import { GoProject, GoTools } from "react-icons/go";

// const Nav = () => (
  
//   <div>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">Navbar</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Link</a>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Dropdown
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a className="dropdown-item" href="#">Action</a>
//               <a className="dropdown-item" href="#">Another action</a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="#">Something else here</a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link disabled" href="#">Disabled</a>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </form>
//       </div>
//     </nav>
//   </div>
// )

// export default Nav

{/* <div>
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
</div> */}
