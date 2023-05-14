import { Component } from 'react';

export default class TodoList extends Component {
  render() {
    const todos = [
      {
        id: 1,
        title: 'Belajar React',
        description: 'Belajar React Hooks, Components, Props, State, Lifecycle',
        completed: false
      },
      {
        id: 2,
        title: 'Membuat Aplikasi React',
        description: 'Membuat Aplikasi TODO List',
        completed: true 
      },
      {
        id: 3,
        title: 'Membuat Aplikasi Chat',
        description: 'Membuat Aplikasi Chat Menggunakan React dan Firebase',
        completed: false 
      },
      {
        id: 4,
        title: 'Belajar Node.js' ,
        description: 'Belajar membuat server menggunakan Node.js dan Express',
        completed: false 
      },
    ];

    return (
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <input type="checkbox" checked={todo.completed} onChange={() => {}} />
          </div>
        ))}
      </div>
    );
  }
}







