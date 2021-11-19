import React from 'react';
import StartPage from '../components/landingpage.js';
import SEO from '../components/seo';
import '../bootstrap.min.css';
import '../components/style.scss';

const AboutMe = () => (
  <div className="bodyContent">
      <SEO title="About Me" />
      <StartPage pageName="AboutMe"/>
      <br />
        <div className="row">
          <div className='col-sm-1' />
          <div className="col-sm-5">
            <div className="card">
              <h2 className="border-0 card-header">
                {" "}
                SKILLS & TOOLSET <br />
              </h2>
            <div className="card-body">
              <div className="card">
                <h2 className="border-0 card-header">
                  {" "}
                  SKILLS <br />
                </h2>
                <div className="card-body">
                  <div className="card-text p-2">
                    &nbsp;{" "}
                    <h5>
                      &nbsp; Software Requirements Engineering {" "}
                    </h5>
                    <hr />
                    <h5>
                      {" "}
                      &nbsp; Agile Project Management {" "}
                    </h5>
                    <hr />
                    <h5>
                      {" "}
                      &nbsp; Front End Web Development {" "}
                    </h5>
                    <hr />
                  </div>
                </div>  
                <br /> 
                <h2 className="border-0 card-header">
                  {" "}
                  TOOLSET <br />
                </h2>
                <div className="card-body">
                  <div className="card-text p-2">
                    &nbsp;{" "}
                    <h5>
                      &nbsp; HTML5, CSS3, ES6 {" "}
                    </h5>
                    <hr />
                    <h5>
                      {" "}
                      &nbsp; Atlassian Jira, Confluence, Trello, Microsoft Azure {" "}
                    </h5>
                    <hr />
                    <h5>
                      {" "}
                      &nbsp; Requirement Elicitation, SRS documentation {" "}
                    </h5>
                    <hr />
                  </div>
                </div>   
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="card">
            <div className="card-body">
              <h2 className="cardalign border-0 card-header">
                {" "}
                QUALIFICATIONS <br />{" "}
              </h2>
              <div className="card">
                <div className="card-body">
                  <br />
                  <div className="row">
                    <div className="col-lg-9 text-lg-left">
                      <h5 className="">
                        {" "}
                        BSc Computer Science Degree {" "}
                      </h5>
                      <hr />
                      <h5 className="">
                        {" "}
                        Scrum Fundamentals Certified (SFC&trade; ) {" "}
                      </h5>
                      <hr />
                      <h5 className="">
                        {" "}
                        ECBA&trade; certified {" "}
                      </h5>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-1' />
      </div>
    </div>
)

export default AboutMe;