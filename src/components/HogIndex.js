import React, { Component } from 'react';

import HogCard from './HogCard';

export default class HogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGreased: true,
      sortBy: 'none',
      hogs: props.hogs,
    };
  }

  sorters = {
    none: (a, b) => {},
    name: (a, b) => a.name.localeCompare(b.name),
    namerev: (a, b) => (a.name < b.name ? 1 : -1),
    weight: (a, b) => a.weight - b.weight,
    reightrev: (a, b) => b.weight - a.weight,
  };

  handleFilters = () => {
    const filteredHogs = this.props.hogs
      .filter(e => this.state.showGreased || !e.greased)
      .sort(this.sorters[this.state.sortBy]);
    this.setState({ hogs: filteredHogs });
  };

  handleGreaseChange = e => {
    this.setState({ showGreased: e.target.checked }, () =>
      this.handleFilters()
    );
  };

  handleSortChange = e => {
    this.setState({ sortBy: e.target.value }, () => this.handleFilters());
  };

  render() {
    return (
      <div>
        <div className="filters">
          Sort by:
          <select onChange={this.handleSortChange} value={this.state.sortBy}>
            <option value="none">None</option>
            <option value="name">Name</option>
            <option value="namerev">Name (reverse)</option>
            <option value="weight">Weight (low -> high)</option>
            <option value="weightrev">Weight (high -> low)</option>
          </select>
          Show Greased?
          <input
            type="checkbox"
            checked={this.state.showGreased}
            onChange={this.handleGreaseChange}
          />{' '}
        </div>
        <div className="ui grid container">
          {this.state.hogs.map(hog => (
            <HogCard key={hog.name} hog={hog}></HogCard>
          ))}
        </div>
      </div>
    );
  }
}
