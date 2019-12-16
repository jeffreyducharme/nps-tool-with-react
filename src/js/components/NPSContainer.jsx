import React, { Component } from "react";
import GridItem from "./GridItem.jsx";

class NPSContainer extends React.Component {
	render() {
		return (
			
			<div className="grid-container">
				{ 
					this.props.items.map((item, i) => {
						return <GridItem key={i} index={i} item={item} countValue={this.props.countValue} changeHandler={this.props.changeHandler} promoters_score={this.props.promoters_score} />
					})	
				} 	
			</div>
		)

	}
}

export default NPSContainer;

