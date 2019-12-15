import React, { Component } from "react";
import ReactDOM from "react-dom";

function ResponseBox(box) {
	const b = box.box // go one node in 

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
			/>	
		</div>
	)
}

export default ResponseBox;
