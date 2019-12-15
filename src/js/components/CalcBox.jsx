import React, { Component } from "react";
import ReactDOM from "react-dom";

import { useStoreActions, useStoreState } from 'easy-peasy';

function CalcBox(box) {
	const b = box.box // go one node in 

	const name = b.name
	const type = b.type
	const text = b.boxText

	const countValue = useStoreState(state => state.countValue) // get current count from store

	let value = countValue[name].value
	if (value === 0) {
		value = "";
	}

	const handleChange = useStoreState(state => state.handleChange)

	return (
		<div className={`calc-box ${name}`}>
			<div className="boxText">{text}</div>
			<input 
				type={`${type}`}
				name={`${name}`}
				//id={`${b.id}`}
				value={`${value}`}
				onChange={handleChange} 
				className="border-radius" 
			/>	
		</div>
	)
}

export default CalcBox;
