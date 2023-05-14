import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const FunctionalTodoList = ({ todos }) => {
  const [todosState, setTodosState] = useState(todos);

  const handleCheckboxChange = (id) => {
    setTodosState((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    });
  };

  const handleDeleteCompleted = () => {
    setTodosState((prevState) => {
      return prevState.filter((todo) => !todo.completed);
    });
  };

  const todosCount = todosState.filter((todo) => !todo.completed).length;

  return (
    <div>
      <div className="todos-count">Jumlah Todos Belum Selesai: {todosCount}</div>
      {todosState.map((todo) => (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`} key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <div className="title">{todo.title}</div>
          <div className="description">{todo.description}</div>
        </div>
      ))}
      <button
        className="delete-button"
        onClick={handleDeleteCompleted}
        disabled={todosCount <= 0}
      >
        Hapus Todos Selesai
      </button>
    </div>
  );
};

FunctionalTodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
};


