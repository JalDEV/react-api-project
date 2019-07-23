import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    console.log(this.props.planet);
    return (
      <div className='card'>
        <div className='card-content'>
          	<div className='card-name'>{this.props.name}</div>
          	<img src={'http://localhost:3008/' + this.props.person.image} alt='profile'/>
            <p>
                <span>Birthday:</span>
                <span>{this.props.birthday}</span>
            </p>
            <p>
                {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
                <span>Homeworld:</span>
                <span>{this.props.planet}</span>
            </p>
        </div>
    </div>

    );
  }
}

export default Card;
