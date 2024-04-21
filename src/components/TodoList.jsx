import React from 'react';
import TodoItem from './Todoitem';

const TodoList = ({ todos, toggleCompleted, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
