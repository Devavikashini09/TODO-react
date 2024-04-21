import React from 'react';

const TodoItem = ({ todo, toggleCompleted, removeTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleCompleted(todo.id)} 
        className="checkbox"
      />
      <span className="task-text">{todo.text}</span>
      <button 
        onClick={() => removeTodo(todo.id)} 
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
