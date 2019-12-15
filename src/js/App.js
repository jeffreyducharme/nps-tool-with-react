import React, { Component } from "react"
import { StoreProvider, createStore } from 'easy-peasy';

import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import NPSContainer from "./components/NPSContainer.jsx"
import Footer from "./components/Footer.jsx"
import Rows from "./nps-config-obj.json"


let store = createStore({
  	initCount: 0,
  	countValue: {
	  	"box-10": {value: 0},
	  	"box-9": {value: 0},
	  	"box-8": {value: 0},
	  	"box-7": {value: 0},
	  	"box-6": {value: 0},
	  	"box-5": {value: 0},
	  	"box-4": {value: 0},
	  	"box-3": {value: 0},
	  	"box-2": {value: 0},
	  	"box-1": {value: 0},
	  	"box-0": {value: 0},
  	},

  	handleChange: function(e) {
  		let val = e.target.value

  		if ( !isNaN(val) ) {
			this.setState(prevState => {
			  let countValue = Object.assign({}, prevState.countValue);  // creating copy of state variable jasper
			  countValue[e.target.name].value = val;                     // update the name property, assign a new value                 
			  return { countValue };                                 // return new object jasper object
			})
		}

  		let promoters_score = this.countValue['box-10'] + this.countValue['box-9'];
  		let passive_score = this.countValue['box-8'] + this.countValue['box-7'];
  		let detractors_score = this.countValue['box-6'] + this.countValue['box-5'] + this.countValue['box-4'] + this.countValue['box-3'] + this.countValue['box-2'] + this.countValue['box-1'] + this.countValue['box-0'];
  		let total_responses = promoters_score+passive_score+detractors_score
  		let promoters_percentage = Math.round( promoters_score / total_responses )
  		let detractors_percentage = Math.round( detractors_score / total_responses )
  		
  		let nps_score = Math.round((promoters_score - detractors_score) / total_responses) * 100

  		document.querySelector('.row-2 .promoters-total input').value = promoters_score
  		document.querySelector('.row-2 .passive-total input').value = passive_score
  		document.querySelector('.row-2 .detractors-total input').value = detractors_score


  	}
});

class App extends Component {

	render() {

		let rows = Rows.Rows

		return (
			<StoreProvider store={store}>
				<div>
					<Nav />
					<Hero />

					<section className="nps-tool" id="NPSContainer">
						<div className="nps-tool-label">NPS CALCULATOR</div>
						<div className="container-fluid">
					
							{ 
								rows.map((row, i) => {
									return <div className={`row row-${row.row}`} key={i}><NPSContainer items={row.items} /></div>
								})
							} 
					
						</div>
					</section>
					<Footer />
				</div>
			</StoreProvider>
		)
	}
}

export default App
