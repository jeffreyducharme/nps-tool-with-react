import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


const gridItem = ({ gridItem, color}) => (
	<div className="grid-item item-{gridItem}">
		<div className="calc-container border-radius {color}">
			<div className="smiley"></div>
			<div className="calc-input-container">
				<calcBox />
				<calcBox />
			</div>
		</div>
		<div className="small-double-connectors {color}"></div>
	</div>
);

gridItem.propTypes = {
	gridItem: PropTypes.object.isRequired,
 	color: PropTypes.string.isRequired,
};

export default gridItem;
