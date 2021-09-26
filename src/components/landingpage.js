import React from 'react';
import '../bootstrap.min.css';
import { Link } from 'gatsby';
//import '../App.scss';
import './style.scss';

const startPage = ({pageName, ...props}) => {
    return (
        //Header
        <div className="landingpage">
            <header className="header">
                <div className="container row">
                    <nav className="navbar navbar expand-lg align-content-center px-0">
                        <button 
                            className="navbar-toggler" 
                            type="button"
                            data-toggle="collapse"
                            data-target="#menu"
                            aria-controls="menu"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fas-fa bars"></i>
                        </button>
                        <div className="navbar-collapse" id="menu">
                            <ul className="navbar-nav ml-lg-auto row">
                                <li className="nav-item">
                                    <Link to="/" className={pageName=="Home" ? "nav-link active" : "nav-link ips"}>
                                        Home
                                        <span className="sr-only"> (current) </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/aboutme" className={pageName=="AboutMe" ? "nav-link active" : "nav-link ips"}>
                                        About Me
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className={pageName=="Blog" ? "nav-link active" : "nav-link ips"} href="https://lets-talk-reactjs.netlify.app">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item nav-item-divider d-none d-lg-block"></li>
                                <li className="nav-item">
                                    <Link to="/features" className={pageName=="Projects" ? "nav-link active" : "nav-link ips"}>
                                        Projects
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default startPage;
