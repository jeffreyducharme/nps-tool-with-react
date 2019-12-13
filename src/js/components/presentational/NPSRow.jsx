import React, { Component } from "react";
import ReactDOM from "react-dom";

class NPSRow extends React.Component {
	render() {
		return (
			<div className="row row-1">
				<div className="grid-container">
					<div className="grid-item item-1">
						<strong>Count the responses</strong>
						<br>
						<p>Add up the number of responses provided for each score.</p>
					</div>
					<div className="grid-item item-2">
						<div className="calc-container border-radius green">
							<div className="smiley"></div>
							<div className="calc-input-container">
								<div className="calc-box box-10">
									<div>10</div>
									<input type="" name="" className="border-radius">
								</div>
								<div className="calc-box box-9">
									<div>9</div>
									<input type="" name="" className="border-radius">
								</div>
							</div>
						</div>
						<div className="small-double-connectors green"></div>
					</div>
					<div className="grid-item item-3">
						<div className="calc-container border-radius gray">
							<div className="smiley"></div>
							<div className="calc-input-container">
								<div className="calc-box box-8">
									<div>8</div>
									<input type="" name="" className="border-radius">
								</div>
								<div className="calc-box box-7">
									<div>7</div>
									<input type="" name="" className="border-radius">
								</div>
							</div>
						</div>
						<div className="small-double-connectors gray"></div>
					</div>
					<div className="grid-item item-4">
						<div className="calc-container border-radius red">
							<div className="smiley"></div>
							<div className="calc-input-container">
								<div className="calc-box box-6">
									<div>6</div>
									<input type="" name="" className="border-radius">
								</div>
								<div className="calc-box box-5">
									<div>5</div>
									<input type="" name="" className="border-radius">
								</div>
								<div className="calc-box box-4">
									<div>4</div>
									<input type="" name="" className="border-radius">
								</div>
								<div className="calc-box box-3">
									<div>3</div>
									<input type="" name="" className="border-radius">
								</div>
								<div className="calc-box box-2">
									<div>2</div>
									<input type="" name="" className="border-radius">
								</div>
								<div className="calc-box box-1">
									<div>1</div>
									<input type="" name="" className="border-radius">
								</div>
								<div className="calc-box box-0">
									<div>0</div>
									<input type="" name="" className="border-radius">
								</div>
							</div>
						</div>
						<div className="small-double-connectors red"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default NPSRow;
	