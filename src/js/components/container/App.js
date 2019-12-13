import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../presentational/Nav.jsx";
import Hero from "../presentational/Hero.jsx";

import Footer from "../presentational/Footer.jsx";

class App extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		friends: ['Jordyn', 'Mikenzi', 'Jake']
	// 	}
	// }
	
	render() {
		return (
			<div className="app-container">
				<Nav />
				<Hero />

				/* <Footer /> */
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

export default App;
	