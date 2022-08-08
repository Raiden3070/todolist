import React from 'react'
import style1 from './sty.module.css';


export default function Todo( { todo, toggleTodo } ) {
  /*const { col, setCol } =useState("#ffffff");
  const randomiszed = () =>{
    const randomcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
    setCol(randomcolor)
  };*/


  function handleTodoClick(){
    toggleTodo(todo.id)
  }
  
  
  return (
    <div>
        <label id="rand" className={style1.list} >
            <input type="checkbox" checked={todo.complete} onChange= {handleTodoClick}/>
            {todo.name}
        </label>
       
    </div>
  )
}
 