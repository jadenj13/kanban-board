import React from 'react';
import PropTypes from 'prop-types';
import SwimLane from '../swim-lane/SwimLane';
import './Board.css';

const Board = ({ swimLanes, title }) => (
  <div className="board">
    <h1 className="board--title">{title}</h1>
    <div
      className="board--content"
      style={{
        gridTemplateColumns: `repeat(${swimLanes.length}, minmax(300px, 1fr))`,
      }}
    >
      {swimLanes.map(swimLane => (
        <SwimLane heading={swimLane} key={swimLane} />
      ))}
    </div>
  </div>
);

Board.propTypes = {
  swimLanes: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Board;
