import React from 'react';
import PropTypes from 'prop-types';
import SwimLane from '../swim-lane/SwimLane';
import './Board.css';

const Board = ({ swimLanes, title, tasks }) => {
  const lanes = swimLanes.map(lane => {
    const laneTasks = tasks.filter(task => task.lane === lane);

    return { lane, laneTasks };
  });

  return (
    <div className="board">
      <h1 className="board--title">{title}</h1>
      <div
        className="board--content"
        style={{
          gridTemplateColumns: `repeat(${swimLanes.length}, minmax(300px, 1fr))`,
        }}
      >
        {lanes.map(({ lane, laneTasks }) => (
          <SwimLane heading={lane} tasks={laneTasks} key={lane} />
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  swimLanes: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf({
      task: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      lane: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Board;
