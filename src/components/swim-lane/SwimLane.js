import React from 'react';
import PropTypes from 'prop-types';
import './SwimLane.css';

const SwimLane = ({ heading }) => {
  return (
    <div className="lane">
      <h4 className="lane--heading">{heading}</h4>
      <div className="lane--content">asdf</div>
    </div>
  );
};

SwimLane.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SwimLane;
