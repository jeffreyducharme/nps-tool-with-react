import React, { Component } from "react";
import ReactDOM from "react-dom";
import TotalsBox from './TotalsBox.jsx'

class TotalsContainer extends React.Component {

	render() {
		return (
			<div>
				<div className={`calc-container border-radius ${this.props.color}`}>
					<div className="smiley"></div>
					<div className="calc-input-container">
					{ 
						this.props.boxes.map((box, i) => {
							return <TotalsBox index={this.props.index} countValue={this.props.countValue} key={i} box={box} />
						})	
					} 
					</div>
				</div>
				<div className={`line-connectors ${this.props.color}`}></div>
			</div>
		)
	}
}	

export default TotalsContainer;


