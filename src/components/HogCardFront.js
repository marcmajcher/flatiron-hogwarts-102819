import React, { Component } from 'react';

export default class HogCardFront extends Component {
  render() {
    return (
      <div className="card-front">
        <div className="image">
          <img src={this.props.hog.image} alt={this.props.hog.name} />
        </div>
        {this.props.hog.name}
      </div>
    );
  }
}
