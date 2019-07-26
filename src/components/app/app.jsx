import React, { Component } from 'react';
import FlatList from '../flat-list/flat-list';

import './app.scss'

class App extends Component {
	render(){
		return(
			<>
				<div className="left-scene">
					<FlatList />
				</div>
				<div className="right-scene">
				</div>
			</>
		)
	}
}

export default App;