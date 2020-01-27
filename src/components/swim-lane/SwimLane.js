import React, { useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import Card from '../card/Card';
import Button from '../button/Button';
import TextInput from '../text-input/TextInput';
import { ReactComponent as Plus } from '../../assets/add-24px.svg';
import './SwimLane.css';

const Modal = React.lazy(() => import('../modal/Modal'));

const SwimLane = ({ heading, tasks, updateTask, addTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: card => updateTask(card.id, heading),
    collect: mon => ({
      isOver: !!mon.isOver(),
    }),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState('');

  const toggleModal = () => {
    setIsModalOpen(currentState => {
      if (currentState) {
        setNewTask('');
      }

      return !currentState;
    });
  };

  const onNewTaskValueChange = event => {
    setNewTask(event.target.value);
  };

  const onNewTaskSubmit = event => {
    event.preventDefault();

    if (newTask) {
      addTask(newTask, heading);
      setNewTask('');
      toggleModal();
    }
  };

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
          <Suspense
            fallback={
              <Button>
                <>Loading...</>
              </Button>
            }
          >
            <Button onClick={toggleModal}>
              <>
                <Plus />
                <span>Add Task</span>
              </>
            </Button>
            {isModalOpen && (
              <Modal closeModal={toggleModal}>
                <>
                  <h6 className="modal--heading">Add Task</h6>
                  <div className="modal--body">
                    <form onSubmit={onNewTaskSubmit}>
                      <TextInput
                        value={newTask}
                        onChange={onNewTaskValueChange}
                        placeholder="New Task"
                      />
                      <button
                        className="button--submit"
                        type="submit"
                        disabled={!newTask}
                      >
                        Add
                      </button>
                    </form>
                  </div>
                </>
              </Modal>
            )}
          </Suspense>
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
  addTask: PropTypes.func.isRequired,
};

export default SwimLane;
