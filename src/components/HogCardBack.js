import React, { Component } from 'react';

export default class HogCardBack extends Component {
  render() {
    return (
      <div className="card-back">
        <p>Name: {this.props.hog.name}</p>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Weight: {this.props.hog.weight}</p>
        {this.props.hog.greased ? (
          <p>
            <b>*greased*</b>
          </p>
        ) : (
          ''
        )}
      </div>
    );
  }
}
