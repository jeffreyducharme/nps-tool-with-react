import React, { Component } from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";

const TotalsBox = ({ box, index, countValue }) => {


	const calculateValue = () => {

		const promoters_score = countValue['box-10'].value + countValue['box-9'].value;
			const passive_score = countValue['box-8'].value + countValue['box-7'].value;
			const detractors = 
				countValue['box-6'].value + 
				countValue['box-5'].value + 
				countValue['box-4'].value + 
				countValue['box-3'].value + 
				countValue['box-2'].value + 
				countValue['box-1'].value +
				countValue['box-0'].value;

			const totalScore = promoters_score + passive_score + detractors;

		if (index === 1) {

			const returnVal = Math.round((promoters_score / totalScore) * 100);

			if (isNaN(returnVal)) {
				return 0;
			}

			return returnVal;	
		}

		if (index === 2) {
			const returnVal = Math.round( (detractors / totalScore) * 100 );

			if (isNaN(returnVal)) {
				return 0;
			}

			return returnVal;

		}

		if (index === 3) {
			
			const returnVal = Math.round(((promoters_score - detractors) / totalScore) * 100);

			if (isNaN(returnVal)) {
				return 0;
			}

			return returnVal;
		}
	}

	return (
		<div className="calc-box box-{boxNum}">
		<div className="boxText">{box.boxText}</div>
			<div id="totals">
				<span className="total">{calculateValue()}</span>
				<span className="percentage">%</span>
			</div>
		</div>
	);
};



export default TotalsBox;

