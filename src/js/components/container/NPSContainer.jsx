import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

let items = [
	{	
		gridItem: '1', 
		color: 'green'
		boxes: 
			{
				boxNum: 10,
				name: 'box-10',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 	
			{
				boxNum: 9,
				name: 'box-9',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 
	},
	{	
		gridItem: '2', 
		color: 'gray'
		boxes: 
			{
				boxNum: 8,
				name: 'box-8',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 	
			{
				boxNum: 7,
				name: 'box-7',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 
	},

	{	
		gridItem: '3', 
		color: 'red'
		boxes: 
			{
				boxNum: 6,
				name: 'box-6',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 
			{
				boxNum: 5,
				name: 'box-5',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 
			{
				boxNum: 4,
				name: 'box-4',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 
			{
				boxNum: 3,
				name: 'box-3',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 
			{
				boxNum: 2,
				name: 'box-2',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 
			{
				boxNum: 1,
				name: 'box-1',
				type: 'text', 
				value: '', 
				//handleChange:
			}, 
			{
				boxNum: 0,
				name: 'box-0',
				type: 'text', 
				value: '', 
				//handleChange:
			},	
	},

]


class NPSContainer extends Component {
	constructor() {
	super();
	this.state = {
		title: ""
	};
	}
	render() {
	return (
		<form id="article-form">
		</form>
	);
	}
}
export default NPSContainer;
