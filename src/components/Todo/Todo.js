import React from 'react';
import s from './Todo.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? s.liComplete : s.li}>
      <div className={s.row}>
        <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
        <p onClick={() => toggleComplete(todo)} className={todo.completed ? s.textComplete : s.text}>{todo.text}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{ <FaRegTrashAlt size={17}/>}</button>
    </li>
  )
}

export default Todo
