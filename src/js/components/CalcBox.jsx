import React, { Component } from "react";
import ReactDOM from "react-dom";

import { useStoreActions, useStoreState } from 'easy-peasy';

const CalcBox = ({ box, countValue, changeHandler}) => {


	const b = box 
	const name = b.name
	const type = b.type
	const text = b.boxText

	let value = '';
	if (countValue[name] && countValue[name].value) {
			value = countValue[name].value;
	}


	if (value === 0) {
		value = "";
	}

	return (
		<div className={`calc-box ${name}`}>
			<div className="boxText">{text}</div>
			<input 
				type={type}
				name={name}
				//id={`${b.id}`}
				value={value}
				onChange={e => changeHandler(e, name)} 
				className="border-radius" 
			/>	
		</div>
	)
}

export default CalcBox;
