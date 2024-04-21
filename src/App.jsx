import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]); // Array to store tasks
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, { text: inputText, completed: false, id: Date.now() }]);
      setInputText('');
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <input 
        type="text" 
        placeholder="Add a task..." 
        value={inputText} 
        onChange={handleInputChange} 
       
      />
      <button onClick={addTodo}>Add Task</button>
      {todos.length > 0 && <TodoList todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />}
    </div>
  );
}

export default App;
