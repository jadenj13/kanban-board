import React, { useState } from 'react';
import Board from '../board/Board';
import './App.css';

const App = () => {
  const [swimLanes] = useState(['To Do', 'In Progress', 'Testing', 'Done']);
  const [title] = useState('Project A');

  return (
    <div className="app">
      <Board swimLanes={swimLanes} title={title} />
    </div>
  );
};

export default App;
