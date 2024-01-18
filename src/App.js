import './App.css';
import NewTodo from './components/newTodo/newTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TodoList</p>
      </header>
      <NewTodo onDelete></NewTodo>
    </div>
  );
}

export default App;
