import React, {useState, useEffect} from 'react';
import s from './App.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo/Todo';
import { db } from './Firebase/firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      toast.error("Please, enter Todo name!")
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false
    })
    setInput('');
  }

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      });
      setTodos(todosArr)
    });
    return () => unsubscribe();
  }, [])

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
    completed: !todo.completed
  })
  }
  
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div className={s.bg}>
      <div className={s.container}>
        <h3 className={s.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={s.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={s.input}
            type='text'
            placeholder='Add Todo'>
          </input>
          <button className={s.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo} />
          ))}
        </ul>
        {todos.length < 1 ? null : (<p className={s.count}>{`You have ${todos.length} Todos`}</p>)}
      </div>
      <ToastContainer autoClose={3000} />
    </div>
    
  );
};
