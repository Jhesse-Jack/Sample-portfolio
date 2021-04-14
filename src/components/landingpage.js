import React from 'react';
import { Link } from 'gatsby';
import "../App.scss";
import "../bootstrap.min.css";
import Wavy from "../images/bye.svg"

const StartPage = () => {
    return (
        <div className="container-fluid">
            <header id="header" style={styles.header}>
                <nav className="right">
                    <Link to="" className="button alt">
                        About Me
                    </Link>
                    <Link to=""className="button alt">
                        Blog
                    </Link>
                    <Link to="" className="button alt">
                        Projects
                    </Link>
                </nav>
            </header>
            <section>
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
            </section>
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
