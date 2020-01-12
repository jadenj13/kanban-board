import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import './SwimLane.css';

const SwimLane = ({ heading, tasks }) => {
  return (
    <div className="lane">
      <h4 className="lane--heading">{heading}</h4>
      <div className="lane--content">
        {tasks.map(task => (
          <Card task={task.task} />
        ))}
      </div>
    </div>
  );
};

SwimLane.propTypes = {
  heading: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf({
      task: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      lane: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SwimLane;
