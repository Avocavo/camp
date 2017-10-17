import React from 'react';
import { ToDoList } from '../../layout/todolist';

export default class ToDos extends React.Component {

  render() {
    return (
      <div>
        <h1>To Do's</h1>
        <ToDoList />
      </div>
    );
  }
}
