import React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import SwimLane from '../swim-lane/SwimLane';
import './Board.css';

const Board = ({ swimLanes, title, tasks, updateTask, addTask }) => {
  const lanes = swimLanes.map(lane => {
    const laneTasks = tasks.filter(task => task.lane === lane);

    return { lane, laneTasks };
  });

  return (
    <DndProvider backend={Backend}>
      <div className="board">
        <h1 className="board--title">{title}</h1>
        <div
          className="board--content"
          style={{
            gridTemplateColumns: `repeat(${swimLanes.length}, minmax(300px, 1fr))`,
          }}
        >
          {lanes.map(({ lane, laneTasks }) => (
            <SwimLane
              heading={lane}
              tasks={laneTasks}
              updateTask={updateTask}
              addTask={addTask}
              key={lane}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

Board.propTypes = {
  swimLanes: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      lane: PropTypes.string.isRequired,
    }),
  ).isRequired,
  updateTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default Board;
