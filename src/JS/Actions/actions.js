import { ADD_TODO,DELETE_TODO,FILTER_TODO,EDIT_TODO } from '../Constants/actions-types';//Import action Types

export const addTodo= (description) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),//The id is generated using Date.now() to ensure it is unique.
      description,
      isDone: false,// the isDone property is set to false by default.
    },
  };
};

export const editTodo = (id, description) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      description,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const filterTodo = (filterType) => {
  return {
    type: FILTER_TODO,
    payload: {
      filterType,
    },
  };
};



              