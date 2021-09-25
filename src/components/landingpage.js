// import React from 'react';
// import { Link } from 'gatsby';
// import "../App.scss";
// import "../bootstrap.min.css";
// import Content from './landingpagecontent';
// import './style.css';

// const StartPage = () => {
//     return (
//         <div className="container-fluid landingpage">
//             <header id="header" style={styles.header}>
//                 <nav className="right">
//                     <Link to="/aboutme" className="button alt">
//                         About Me
//                     </Link>
//                     {/* <Link to="lets-talk-reactjs"className="button alt">
//                         Blog
//                     </Link> */}
//                     <a href="https://lets-talk-reactjs.netlify.app" className="button alt">
//                         Blog
//                     </a>
//                     <Link to="/projects" className="button alt">
//                         Projects
//                     </Link>
//                 </nav>
//             </header>
//             <Content />
//         </div>
//     )
// }

// const styles = {
//     header: {
//         margin: '0%',
//         padding: '0%',
//         border: '0',
//         fontSize: '100%',
//         font: 'inherit',
//         verticalAlign: 'baseline',
//         display: 'block',
//     },

// };

// export default StartPage;

import React from 'react';
import '../bootstrap.min.css';
import { Link } from 'gatsby';
//import '../App.scss';
import './style.scss';

const startPage = () => {
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
                                    <Link to="/" className="nav-link active">
                                        Home
                                        <span className="sr-only"> (current) </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/aboutme" className="nav-link ips">
                                        About Me
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ips" href="https://lets-talk-reactjs.netlify.app">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item nav-item-divider d-none d-lg-block"></li>
                                <li className="nav-item">
                                    <Link to="/features" className="nav-link ips">
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
