import React from 'react';
import '../bootstrap.min.css';
import './style.scss';
import Wavy from '../images/bye.svg';
import HeroImage from '../images/undraw_coding_6mjf.svg';

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
								<b> Hello there, </b>
								<img src={Wavy} className="imgreduce img-fluid wave" />
								<br />
								<span>
									<b>
									I'm
									<span className="name"> James</span> </b>
								&nbsp;
								</span>
								<br />
								<b> A 
									<span>
										&lt; front-end developer /&gt; 
									</span>
								</b>
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
