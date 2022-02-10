import './App.css';
import react from 'react';
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';
import Todo from './components/Todo';

function App() {
  return (
    <div className="todo-app">
      <Todo/>
    </div>
  );
}

export default App;
