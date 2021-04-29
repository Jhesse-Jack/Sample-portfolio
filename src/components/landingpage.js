import React from 'react';
import { Link } from 'gatsby';
import "../App.scss";
import "../bootstrap.min.css";
import Wavy from "../images/bye.svg"
import Content from './landingpagecontent';

const StartPage = () => {
    return (
        <div className="container-fluid">
            <header id="header" style={styles.header}>
                <nav className="right">
                    <Link to="/aboutme" className="button alt">
                        About Me
                    </Link>
                    {/* <Link to="lets-talk-reactjs"className="button alt">
                        Blog
                    </Link> */}
                    <a href="https://lets-talk-reactjs.netlify.app" className="button alt">
                        Blog
                    </a>
                    <Link to="/projects" className="button alt">
                        Projects
                    </Link>
                </nav>
            </header>
            <Content />
            {/* <section>
                <h2> 
                    Hello there, 
                    <img src={Wavy} alt="wavy-hand" />
                    <br />
                    <span> 
                        I'm 
                        <span>
                            James 
                        </span>
                    </span>
                    <br />
                    A front-end developer
                </h2>
            </section> */}
        </div>
    )
}

const styles = {
    header: {
        margin: '0%',
        padding: '0%',
        border: '0',
        fontSize: '100%',
        font: 'inherit',
        verticalAlign: 'baseline',
        display: 'block',
    },

};

export default StartPage;
