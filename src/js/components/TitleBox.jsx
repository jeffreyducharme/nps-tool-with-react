import React, { Component } from "react";
import ReactDOM from "react-dom";
//import PropTypes from "prop-types";

class TitleBox extends React.Component {

	render() {	

		return (
			<div>
				<strong>{this.props.text.title}</strong>
				<br/>
				<p>{this.props.text.subtext}</p>
			</div>
		)
	}
}

export default TitleBox;
	
