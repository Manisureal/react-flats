import React from 'react';
import Flats from '../../../data/flats';
import Flat from '../flat/flat'
import './flat-list.scss'

class FlatList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			flats: Flats
		}
	}
	
	displayFlats(){
		return this.state.flats.map( (flat) => <Flat name={flat.name} price={flat.price} priceCurrency={flat.priceCurrency} imageUrl={flat.imageUrl} />)
	}

	componentWillMount(){
		console.log('COMPONENT WILL MOUNT')
	}

	componentDidMount(){
		console.log('COMPONENT DID MOUNT')
	}

	render(){
		console.log('COMPONENT WILL RENDER')
		console.log(this.state.flats)
		return this.displayFlats();
	}
}

export default FlatList;