import React, { Component } from "react";
import GridItem from "./GridItem.jsx";

class NPSContainer extends React.Component {
	render() {
		return (
			
			<div className="grid-container">
				{ 
					this.props.items.map((item, i) => {
						return <GridItem key={i} item={item} />
					})	
				} 
			</div>
		)

	}
}

export default NPSContainer;

