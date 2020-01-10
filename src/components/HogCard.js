import React from 'react';
import HogCardFront from './HogCardFront';
import HogCardBack from './HogCardBack';

export default props => {
  return (
    <div className="pigTile">
      <HogCardFront hog={props.hog}></HogCardFront>
      <HogCardBack hog={props.hog}></HogCardBack>
    </div>
  );
};
