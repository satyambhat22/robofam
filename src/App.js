import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robots } from './Robots'; 
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: Robots,
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredRobots = this.state.Robots.filter(robot => {
      return (
      	robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()),
        robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase())
      	);
    });

  return (
      <div className='App tc'>
        <div className='Header tc'>
          <h1 className='Header-title tc f1 pd3 ma2'>RoboFamily</h1>
          <SearchBox className = 'tc ' searchChange={this.onSearchChange} />
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
