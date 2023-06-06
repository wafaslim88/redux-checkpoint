import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../JS/Actions/actions';
import './AddTask.css';

const AddTask = () => {
  const dispatch = useDispatch(); // Get the dispatch function from React Redux
  const [description, setDescription] = useState(''); // Initialize a state variable for the task description

// Function to handle adding a new task
  const handleAddTask = () => {
    if (description !== '') {
      dispatch(addTodo(description)); // Dispatch the addTodo action with the description
      setDescription(''); // Clear the input field by resetting the description state to an empty string
    }
    }
  
  return (
    <div className='add-task-container'>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className='btn-add' onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;














