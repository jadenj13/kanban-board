import React from 'react';
import PropTypes from 'prop-types';
import SwimLane from '../swim-lane/SwimLane';
import './Board.css';

const Board = ({ swimLanes }) => (
  <div>
    {swimLanes.map(swimLane => (
      <SwimLane heading={swimLane} />
    ))}
  </div>
);

Board.propTypes = {
  swimLanes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Board;
