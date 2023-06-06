import { useDispatch } from 'react-redux';
import { editTodo,deleteTodo } from '../JS/Actions/actions';
import React, { useState } from 'react';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);//setEditedDescription updates the editedDescription state.

  const handleEditTodo = () => {
    if (editedDescription.trim() !== '') { /*checks if the edited description 
    is not an empty string after trimming any leading or trailing whitespace*/
     dispatch(editTodo(id, editedDescription));//dispatches the editTodo action with the id of the task and the updated editedDescription.
      setEditing(false);// It turns off the editing mode
    }
  };

  const handleDeleteTodo = () => {
    // Dispatch the deleteTask action with the task Id
    dispatch(deleteTodo(id));
  };
  return (
     <div>
    {editing ? (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEditTodo}>Save</button>
        </div>
      ) : (
        <div>
          <p>{description}</p>
          <p> Is Done: {isDone ? 'Yes' : 'No'}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDeleteTodo}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;


