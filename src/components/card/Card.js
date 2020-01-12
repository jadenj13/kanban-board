import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import './Card.css';

const Card = ({ task }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'CARD', id: task.id },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div className="card" ref={dragRef} style={{ opacity }}>
      <p className="card--text">{task.task}</p>
    </div>
  );
};

Card.propTypes = {
  task: PropTypes.shape({
    task: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
