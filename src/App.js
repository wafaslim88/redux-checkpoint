import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <h1 style={{marginTop:20,color:'#353d08'}}>Todo List</h1>

      <AddTask />
      <ListTask/>
      
    </div>
  );
};

export default App;