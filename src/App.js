import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import SearchBar from "./SearchBar.js"
import star from './images/star.svg';
import wars from './images/wars.svg';
import ReactPaginate from 'react-paginate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: null,
      planets: null,
      pageCount: null,
      page: null
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
        <div class="content">
          <SearchBar />
          
          {this.state.people.map(person => (
            <Card key={person.name} person={person} name={person.name}  planets={this.state.planets} planet={this.state.planets[person.homeworld - 1].name} birthday={person.birth_year}  />
          ), this)}
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'} 
          />
        </div>
      ); 
    }
  }
  
  handlePageClick = data => {
    this.setState({ page: data.selected }, () => {
      this.fetchPeople();
    });
  }


  fetchPeople() {
    var self = this;
    fetch('http://localhost:3008/people?_limit=10&_page=' + self.state.page)
    .then(function(response) {
        self.setState({ 
          pageCount: Math.ceil( response.headers.get('x-total-count') / 10) 
        });
        return response.json();
    }).then(data => this.setState({ people: data }));
  }

  componentDidMount() {
    this.fetchPeople();

    fetch('http://localhost:3008/planets')
    .then(response => response.json())
    .then(data => this.setState({ isLoaded: true, planets: data }));
  }

  
}

export default App;
