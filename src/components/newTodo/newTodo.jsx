import './newTodo.css';
import React, { useState } from 'react';

const NewTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDelete = (index) => {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
  };


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="New Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}<button onClick={() => handleDelete(index)}>Remove Item</button></li>
        ))}
      </ul>
    </div>
  );
};

export default NewTodo;
