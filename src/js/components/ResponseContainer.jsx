import React, { Component } from "react";
import ReactDOM from "react-dom";
import ResponseBox from './ResponseBox.jsx'

class ResponseContainer extends React.Component {

	render() {
		return (
			<div>
				<div className={`calc-container border-radius ${this.props.color}`}>
					<div className="smiley"></div>
					<div className="calc-input-container">
					{ 
						this.props.boxes.map((box, i) => {
							return <ResponseBox 
										key={i} 
										box={box} 
										index={this.props.index}
										countValue={this.props.countValue} 
									/>
						})
					} 
					</div>
				</div>
				<div className={`line-connectors ${this.props.color}`}></div>
			</div>
		)
	}
}	

export default ResponseContainer;
