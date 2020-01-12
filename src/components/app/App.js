import React, { useState } from 'react';
import Board from '../board/Board';
import './App.css';

const App = () => {
  const [swimLanes] = useState(
    localStorage.getItem('swim-lanes') || ['To Do', 'In Progress', 'Done'],
  );
  const [title] = useState(localStorage.getItem('title') || 'Project A');
  const [tasks, setTasks] = useState([
    {
      task: 'Add ability to edit title',
      id: 1,
      lane: 'To Do',
    },
  ]);

  const updateTask = (taskId, lane) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          lane,
        };
      }
      return task;
    });

    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Board
        swimLanes={swimLanes}
        title={title}
        tasks={tasks}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
