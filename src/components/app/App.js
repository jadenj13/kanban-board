import React, { useState } from 'react';
import Board from '../board/Board';
import './App.css';

const App = () => {
  const [swimLanes] = useState(
    localStorage.getItem('swim-lanes') || ['To Do', 'In Progress', 'Done'],
  );
  const [title] = useState(localStorage.getItem('title') || 'Project A');
  const [tasks] = useState([
    {
      task: 'Add ability to edit title',
      id: 1,
      lane: 'To Do',
    },
  ]);

  return (
    <div className="app">
      <Board swimLanes={swimLanes} title={title} tasks={tasks} />
    </div>
  );
};

export default App;
