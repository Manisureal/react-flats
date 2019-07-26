import React from 'react';
import Flats from '../../../data/flats';
import './flat-list.scss'

class FlatList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			flats: Flats
		}
	}
	
	displayFlats(){
		//Implement this after Flat Component is created
		//this.state.flats.map(flat => )
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
		return null;
	}
}

export default FlatList;