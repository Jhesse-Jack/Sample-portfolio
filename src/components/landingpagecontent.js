import React from 'react';
import '../bootstrap.min.css';
import './style.scss';
import Wavy from '../images/bye.svg';
import HeroImage from '../images/undraw_coding_6mjf.svg';
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Hero = () => {
	return (
		<div className="jumbotron jumbotron-fluid bg-transparent hero section m-0 landingpage">
			<div className="container">
				<div className="row align-items-end align-items-xl-center">
					<div className="col-12 col-lg-5">
						<div className="hero-content text-center text-lg-left">
							<div className="space-md" />
							&nbsp;
							<p className="lead">
								<b> Hi there, </b>
								<img src={Wavy} className="imgreduce img-fluid wave" />
								<br />
								<span>
									<b>
									I'm
									<span className="name"> JAMES</span> </b>
								&nbsp;
								</span>
								<br />
								<b> A 
									<span>
										&nbsp; &lt;FRONT-END DEVELOPER/&gt; 
									</span>
								</b>
								<hr />
								<div className="row">
									<div className="col-2" />
									<div className="col-2 d-flex justify-content-center">
										<a href="https://github.com/Jhesse-Jack">
											<button 
												role="button" 
												className="btn btn-outline btn-dark"
												value="Visit James' GitHub profile">
												<GoMarkGithub />
											</button>
										</a>
									</div>
									<div className="col-2">
										<a href="https://www.linkedin.com/in/james-armah-46309a162">
											<button 
												type="button" 
												className="btn btn-outline-primary"
												value="Visit James' LinkedIn profile">
												<FaLinkedin />
											</button>
										</a>
									</div>
									<div className="col-2">
										<a href="https://web.facebook.com/jesse.jack.619/">
											<button 
												type="button" 
												className="btn btn-outline-primary"
												value="Visit James' Facebook profile">
												<FaFacebookSquare />
											</button>
										</a>
									</div>
									<div className="col-2">
										<a href="https://twitter.com/KCJxmes">
											<button 
												type="button" 
												className="btn btn-outline-primary"
												value="Visit James' Twitter profile">
												<FaTwitter />
											</button>
										</a>
									</div>
									<div className="col-2"/>
								</div>
							</p>
							&nbsp;
							<div className="space-md" />
						</div>
					</div>
					<div className="col-12 col-lg-7 px-0">
						<img src={HeroImage} className="img-fluid hero-img" alt="Hero" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
