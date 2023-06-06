import { useSelector } from 'react-redux';
import React,{useState} from 'react';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);// the useSelector hook is used to access the tasks array from the Redux store
 //the selector function (state) => state.tasks selects the tasks array from the state object
  const [filter, setFilter] = useState('ALL'); // Set up the filter state with an initial value of 'ALL'
  const filteredTasks = filter === 'ALL' ? tasks : tasks.filter(task => task.isDone === (filter === 'DONE'));
  //If the filter value is 'DONE', it filters the tasks array to only tasks where task.isDone is true
  return (
        <div>
          <div>
            <label>
              <input
                type="radio"
                value="ALL"
                checked={filter === 'ALL'}
                onChange={() => setFilter('ALL')}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                value="DONE"
                checked={filter === 'DONE'}
                onChange={() => setFilter('DONE')}
              />
              Done
            </label>
            <label>
              <input
                type="radio"
                value="NOT_DONE"
                checked={filter === 'NOT_DONE'}
                onChange={() => setFilter('NOT_DONE')}
              />
              Not Done
            </label>
          </div>
    
          {filteredTasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              
            />
          ))}
        </div>
      );
    };
    
    export default ListTask;
    
  