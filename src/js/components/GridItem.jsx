import React, { Component } from "react";
import ReactDOM from "react-dom";
import CalcContainer from './CalcContainer.jsx'
import TitleBox from './TitleBox.jsx'
import TotalsContainer from './TotalsContainer.jsx'
import ResponseContainer from './ResponseContainer.jsx'

class GridItem extends React.Component {

	renderGridItemType(itemType) {
	  switch(itemType) {
	  	case 'row-title':
	      return <TitleBox text={this.props.item.text}/>
	   	case 'response-box':
	      return <ResponseContainer index={this.props.index} countValue={this.props.countValue} color={this.props.item.color} boxes={this.props.item.boxes}/>
	    case 'totals-box':
	      return <TotalsContainer index={this.props.index} countValue={this.props.countValue} color={this.props.item.color} boxes={this.props.item.boxes}/>
	    default:
	      return <CalcContainer color={this.props.item.color} boxes={this.props.item.boxes} countValue={this.props.countValue} changeHandler={this.props.changeHandler}/>
	  }
	}

	render() {
		return (
			<div className={`grid-item item-${this.props.item.gridItem}`}>
				{this.renderGridItemType(this.props.item.itemType)}
			</div> 
		)
	}
}	

export default GridItem;
	
