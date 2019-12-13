import React, { Component } from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
	render() {
		return (
			<section className="footer-signup-form col-md-12">
				<div className="container-fluid">
					<form className="signup-form ">
						<div className="left-container">
							<input className="left" type="email" name="email" placeholder="Your email address" required />
							<input type="password" id="pass" name="password" minlength="8" placeholder="Choose your password" required />
						</div>
							<div className="right-container">
							<button className="right" type="submit">Get started</button>
							<span>or</span>
							<button className="google-signup-button left-right" type="submit">
								<div className="google-signup-button-inner">
									Sign up with Google
								</div>
							</button>
						</div>
					</form>
					<div className="social-icons">
						<div className="facebook-circle"></div>
						<div className="twitter-circle"></div>
					</div>
				</div>
			</section>
		)
	}
}

export default Footer;
	