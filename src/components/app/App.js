import React, { useState } from 'react';
import Board from '../board/Board';
import './App.css';

const App = () => {
  const [swimLanes] = useState(['To Do', 'In Progress', 'Testing', 'Done']);

  return (
    <>
      <Board swimLanes={swimLanes} />
    </>
  );
};

export default App;
