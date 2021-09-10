import React from "react";
import React from 'react';
import './styles.css';

function About() {
	return (
		<section className="bg-light about-page" id="about">
			<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 text-left">
						<h1 className="text-center mt-0 about">About Me</h1>
						<hr className="divider my-4" />
						<p className="text-white mb-0">
							I succeeded in getting a bachelors degree in biomedical engineering in 2020.  It was a difficult 
							five years of work, but I have something to prove my endurance.  Of course,	I decided to undertake 
							another challenge and join University of Connecticut’s Certificate in Coding Course.  I did so 
							because I am looking to better myself, and yeild as much use as I can to potentail employers.
							<h4 class="my-3">💻 My skills 💻 </h4>
							<li>HTML/CSS</li>
							<li>Bootstrap</li>
							<li>Javascript</li>
							<li>Node Js</li>
							<li>Express</li>
							<li>MySQL</li>
						</p>
						<div>
							{/* <a href={Resume} target="blank" className="btn btn-outline-dark about-btn" role="button"><i class="fas fa-user-circle"></i> Resume</a> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
