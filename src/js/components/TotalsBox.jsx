import React, { Component } from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

const TotalsBox = ({ box }) => (
	<div className="calc-box box-{boxNum}">
		<div className="boxText">{box.boxText}</div>
		<div id="totals">
			<span className="total">0</span>
			<span className="percentage">%</span>
		</div>
	</div>
);

export default TotalsBox;

