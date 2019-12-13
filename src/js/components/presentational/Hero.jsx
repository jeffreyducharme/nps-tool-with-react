import React, { Component } from "react";
import ReactDOM from "react-dom";

class Hero extends React.Component {
	render() {
		return (
			<section className="hero">
				<div className="container-fluid">
					<div className="jumbotron col-md-8 col-md-offset-2">
						<h1>Calculate your NPS® (Net Promoter Score)</h1>
						<p>Calculating your NPS score is as simple as tallying up your responses and subtracting the percentage of detractors from the percentage of promoters. The score is a whole number that ranges from -100 to 100, and indicates customer happiness with your brand experience.</p>
						<p>Use the calculator below to calculate your NPS from your survey responses.</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Hero;
	