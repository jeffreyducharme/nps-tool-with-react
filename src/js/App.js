import React, { Component } from "react"
import { StoreProvider, createStore } from 'easy-peasy';

import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import NPSContainer from "./components/NPSContainer.jsx"
import Footer from "./components/Footer.jsx"
import Rows from "./nps-config-obj.json"

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
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
		  	promoters_score: null,

		  	store: null,
		  	rows: Rows.Rows,
		}

		this.handleChange = this.handleChange.bind(this);
	}


	componentDidMount() {

		const store = createStore({...this.countValue});
		this.setState({ store });

	}

	handleChange(e) {

			console.log('e.target.value', e.target.value)

			const value = e.target.value === '' ? 0 : e.target.value;



				this.setState({
						countValue: {
							...this.state.countValue,
							[e.target.name]: {
								value: parseInt(value)
							}
						}
				});


		  	  	}

	render() {

		return (
				<div>
					<Nav />
					<Hero />

					<section className="nps-tool" id="NPSContainer">
						<div className="nps-tool-label">NPS CALCULATOR</div>
						<div className="container-fluid">
					
							{ 
								this.state.rows.map((row, i) => {
									return (
									<div className={`row row-${row.row}`} key={i}>
										<NPSContainer promoters_score={this.state.promoters_score} items={row.items} countValue={this.state.countValue} changeHandler={this.handleChange} />
									</div>
									)
								})
							} 
					
						</div>
					</section>
					<Footer />
				</div>
		);
	}
}

export default App
