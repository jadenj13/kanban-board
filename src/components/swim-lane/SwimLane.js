import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import Card from '../card/Card';
import { ReactComponent as Plus } from '../../assets/add-24px.svg';
import './SwimLane.css';

const SwimLane = ({ heading, tasks, updateTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: card => updateTask(card.id, heading),
    collect: mon => ({
      isOver: !!mon.isOver(),
    }),
  });

  return (
    <div className="lane">
      <div
        className="lane--card"
        ref={drop}
        style={{
          backgroundColor: isOver ? 'var(--off-white)' : 'var(--white)',
        }}
      >
        <h4 className="lane--heading">{heading}</h4>
        <div className="lane--content">
          {tasks.map(task => (
            <Card task={task} key={task.id} />
          ))}
        </div>
        <div className="lane--footer">
          <Plus />
          <span>Add Task</span>
        </div>
      </div>
    </div>
  );
};

SwimLane.propTypes = {
  heading: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      lane: PropTypes.string.isRequired,
    }),
  ).isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default SwimLane;
