import React from 'react';
import PropTypes from 'prop-types';
import './SwimLane.css';

const SwimLane = ({ heading }) => <div>{heading}</div>;

SwimLane.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SwimLane;
