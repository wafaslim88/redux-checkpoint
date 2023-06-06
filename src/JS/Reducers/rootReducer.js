import { ADD_TODO,FILTER_TODO,DELETE_TODO,EDIT_TODO} from '../Constants/actions-types';

const initialState = {
    tasks:[], // An empty array to store the tasks
    filter: 'ALL', // The initial filter value is set to 'ALL'
  };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case EDIT_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    case FILTER_TODO:
      return {
        ...state,
        filter: action.payload.filterType,
      };
    default:
      return state;
  }
};

export default rootReducer;
