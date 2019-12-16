import React, { Component } from "react";
import ReactDOM from "react-dom";
import CalcBox from './CalcBox.jsx'

class CalcContainer extends React.Component {

	render() {
		return (
			<div>
				<div className={`calc-container border-radius ${this.props.color}`}>
					<div className="smiley"></div>
					<div className="calc-input-container">
					{ 
						this.props.boxes.map((box, i) => {
							return <CalcBox countValue={this.props.countValue} key={i} box={box} changeHandler={this.props.changeHandler} />
						})	
					} 
					</div>
				</div>
				<div className={`line-connectors ${this.props.color}`}></div>
			</div>
		)
	}
}	

export default CalcContainer;
