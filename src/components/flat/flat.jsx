import React from 'react';
import './flat.scss';

class Flat extends React.Component {
	render(){

	  const imgUrl = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${this.props.imageUrl})`,
        backgroundPosition: 'center',
  		backgroundSize: 'cover',
  		backgroundRepeat: 'no-repeat'
      };

	  return(
	  	<div className='flat' style={imgUrl}>
	  	  <p className='flat-price'>{ this.props.priceCurrency + " " + this.props.price }</p>
	  	  <p className='flat-name'>{ this.props.name }</p>
	  	  { <img /> }
	  	</div>
	  );
	}
}

export default Flat;