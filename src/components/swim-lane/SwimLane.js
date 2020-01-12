import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import Card from '../card/Card';
import './SwimLane.css';

const SwimLane = ({ heading, tasks, updateTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: card => updateTask(card.id, heading),
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  });

  return (
    <div
      className="lane"
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
