import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogIndex from './HogIndex';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: hogs.map(hog => {
        hog.image = `/hog-imgs/${hog.name
          .toLowerCase()
          .replace(/ /g, '_')}.jpg`;
        return hog;
      }),
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogIndex hogs={this.state.hogs}></HogIndex>
      </div>
    );
  }
}

export default App;
