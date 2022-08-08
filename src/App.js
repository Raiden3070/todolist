import React, { useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';
import style1 from './sty.module.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos) 
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos =>{
      return [...prevTodos, {id:uuidv4(), name:name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo=> !todo.complete)
    setTodos(newTodos)
  }
  
  return (
    <>
    <body className={style1.bod}>
      <h2>Lets get it done</h2>
      <div className={style1.con1} >  
        <input className={style1.input} ref= {todoNameRef} type="text" />
        <button className={style1.but} onClick={handleAddTodo}>Add Todo</button>
        <button className={style1.but} onClick={handleClearTodos}>Clear Complete</button>
        </div>
      <div className={style1.con2} >  
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <br></br>
        <br></br>
        <div className={style1.warning}>{todos.filter(todo=> !todo.complete).length} left to do</div>
      </div>
    </body>
    </>
  )
}

export default App;
