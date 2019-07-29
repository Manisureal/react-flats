import React from 'react';
import './flat.scss';

class Flat extends React.Component {
	render(){

	  const imgUrl = {
        backgroundImage: `url(${this.props.imageUrl})`,
        backgroundPosition: 'center',
  		backgroundSize: 'cover',
  		backgroundRepeat: 'no-repeat'
      };

	  return(
	  	<div className="flat" style={imgUrl}>
	  	  <p>{ this.props.priceCurrency + this.props.price }</p>
	  	  <p>{ this.props.name }</p>
	  	  { <img /> }
	  	</div>
	  );
	}
}

export default Flat;