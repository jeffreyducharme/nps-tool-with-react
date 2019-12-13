import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


const calcBox = ({ boxNum, name, type, value, handleChange }) => (
	<div className="calc-box box-{boxNum}">
		<div>{boxNum}</div>
		<input 
			type="{type}" 
			name="{name}" 
			id="{id}"
			value="{value}"
			//onChange={handleChange} 
			className="border-radius" 
		/>
	</div>
);

Input.propTypes = {
  color: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  //handleChange: PropTypes.func.isRequired
};

export default calcBox;
