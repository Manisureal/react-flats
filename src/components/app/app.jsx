import React, { Component } from 'react';
import FlatList from '../flat-list/flat-list';
import GoogleMapReact from 'google-map-react';

import './app.scss'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			allFlats: null
		}
	}

	retrieveFlats = (f) => {
		this.setState({ allFlats: f });
	}

	returnFlats(){
		// stateless functional component - does not have a state and takes in either an object or a prop
		const flatMarkers = []
		const AnyReactComponent = ( {text} ) => (
			<div className="marker">{text}</div>

		);

		if (this.state.allFlats !== null){
			this.state.allFlats.forEach(({ lat, lng, name }) =>{
				flatMarkers.push(<AnyReactComponent lat={lat} lng={lng} text={name} />)
			})
		}

		return flatMarkers
	}

	render(){
		return(
			<>
				<div className="left-scene">
					<FlatList getFlatsCallback={this.retrieveFlats} />
				</div>
				<div className="right-scene">
					<GoogleMapReact
						defaultCenter={{lat: 48.884211, lng: 2.34689}}
						defaultZoom={11}
					>
						{ this.returnFlats() }
					</GoogleMapReact>
				</div>
			</>
		)
	}
}

export default App;