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
  const [tasks, setTasks] = useLocalStorage('tasks', []);

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

  const addTask = (task, lane) => {
    const id = tasks.reduce((currentId, currentTask) => {
      return currentId > currentTask.currentId + 1
        ? currentId
        : currentTask.id + 1;
    }, 0);
    setTasks([...tasks, { task, lane, id }]);
  };

  return (
    <div className="app">
      <Board
        swimLanes={swimLanes}
        title={title}
        tasks={tasks}
        updateTask={updateTask}
        addTask={addTask}
      />
    </div>
  );
};

export default App;
