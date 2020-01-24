import React from 'react';
import Board from '../board/Board';
import useLocalStorage from '../../hooks/use-local-storage';
import './App.css';

const App = () => {
  const [swimLanes] = useLocalStorage('lanes', [
    'To Do',
    'In Progress',
    'Done',
  ]);
  const [title] = useLocalStorage('board-name', 'Project A');
  const [tasks, setTasks] = useLocalStorage('tasks', [
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
