import React, { Component } from "react";
import ReactDOM from "react-dom";

class Nav extends React.Component {
	render() {
		return (
			<header>
				<div className="container-fluid">
					<nav className="navbar navbar-expand-lg navbar-light">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav">
							  <li className="nav-item dropdown">
							    <a className="nav-link dropdown-toggle" href="#Topic" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							      Products
							    </a>
							    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
							      <a className="dropdown-item" href="#">Action</a>
							      <a className="dropdown-item" href="#">Another action</a>
							      <div className="dropdown-divider"></div>
							      <a className="dropdown-item" href="#">Something else here</a>
							    </div>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link" href="#Today">Customer</a>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link" href="#Today">Enterprise</a>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link" href="#Tomorrow">Pricing</a>
							  </li>
							</ul>
							<ul className="navbar-nav nav-right">
							  <li className="nav-item dropdown">
							    <a className="nav-link dropdown-toggle" href="#Topic" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							      Help
							    </a>
							    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
							      <a className="dropdown-item" href="#">Action</a>
							      <a className="dropdown-item" href="#">Another action</a>
							      <div className="dropdown-divider"></div>
							      <a className="dropdown-item" href="#">Something else here</a>
							    </div>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link" href="#Today">Get Started for free</a>
							  </li>
							  <li className="nav-item">
							    <a className="nav-link redOrange" href="#SignIn">Sign in</a>
							  </li>
							</ul>
						</div>	
					</nav>
				</div>
			</header>
		)
	}
}

export default Nav;
	
