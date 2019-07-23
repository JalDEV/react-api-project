import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import SearchBar from "./SearchBar.js"
import star from './images/star.svg';
import wars from './images/wars.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: null,
      planets: null
    };
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.planets);
      
      return (
        <div>
          <SearchBar />
          {this.state.people.map(person => (
            <Card key={person.name} person={person} name={person.name}  planet={this.state.planets[person.homeworld - 1].name} birthday={person.birth_year}  />
          ), this)}
        </div>
      );
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3008/people')
      .then(response => response.json())
      .then(data => this.setState({ people: data }));

    fetch('http://localhost:3008/planets')
    .then(response => response.json())
    .then(data => this.setState({ isLoaded: true, planets: data }));
  }

  
}

export default App;
