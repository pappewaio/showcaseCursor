import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setTodos([...todos, {
      id: Date.now(),
      text: newTodo,
      completed: false
    }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-container">
      <h2>Att Göra Lista</h2>
      
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Lägg till en ny uppgift..."
          className="todo-input"
        />
        <button type="submit" className="todo-button">Lägg Till</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li 
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleTodo(todo.id)}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {}}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p className="empty-message">Inga uppgifter än. Lägg till något!</p>
      )}
    </div>
  );
};

export default Todo; 