import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ task }) => (
  <div className="card">
    <p className="card--text">{task}</p>
  </div>
);

Card.propTypes = {
  task: PropTypes.string.isRequired,
};

export default Card;
