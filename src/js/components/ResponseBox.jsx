import React, { Component } from "react";
import ReactDOM from "react-dom";

function ResponseBox(props) {

	let value = '';
	if (props.index === 1) {
		value = props.countValue['box-10'].value + props.countValue['box-9'].value;
	}

	if (props.index === 2) {
		value = props.countValue['box-8'].value + props.countValue['box-7'].value;
	}

	if (props.index === 3) {
		value = props.countValue['box-6'].value + 
				props.countValue['box-5'].value + 
				props.countValue['box-4'].value + 
				props.countValue['box-3'].value + 
				props.countValue['box-2'].value + 
				props.countValue['box-1'].value +
				props.countValue['box-0'].value
	}


	const b = props.box 

	const name = b.name
	const type = b.type
	const text = b.boxText

	return (
		<div className={`calc-box ${name}`}>
			<div className="boxText">{text}</div>
			<input 
				type={`${type}`}
				name={`${name}`}
				//id={`${b.id}`}
				className="border-radius"
				value={value} 
				disabled
			/>	
		</div>
	)
}

export default ResponseBox;
