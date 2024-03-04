import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todoList,setTodoList]=useState([]);

const saveToDoList=(event)=>{
const toname=event.target.toname.value;
if(!todoList.includes(toname)){
  const finalTodoList=[...todoList,toname]
  setTodoList(finalTodoList)
}else{
  alert("Todo name is already exists..")
}
  event.preventDefault();

}
const list=todoList.map((value,index)=>{
  return(
      < TodoListItems value={value} key={index}/> 
 )
})
  return (
    <>
      <div className='App'>
        <h1>Todo List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name='toname' /> <button>Save</button>
        </form>
        <ul className='outerDiv'>
          <li>{list} <span>&times;</span></li>
        </ul>
      </div>
    </>
  )
}

export default App

function TodoListItems({value}){
  return(
    <li>
      {value} <span>&times;</span>
    </li>
  )
}