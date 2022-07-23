// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import { Footer } from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import {AddTodo} from './MyComponents/AddTodo';
import React, { useState } from 'react';


function App() {
  const onDelete=(todo)=>{
    console.log(todo);
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }))
  }
  const addTodo=(title,desc)=>{
    if(todos.length==0){
    sno=0;}
    else{
    var sno = todos[todos.length-1].sno + 1;}
      const myTodo={
        sno:sno,
        title:title,
        desc: desc,
      }
      setTodos([...todos,myTodo]);
   }
  const[todos,setTodos]=useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get the job done1"
    },
    {
      sno: 1,
      title: "Go to the mall",
      desc: "You need to go to the market to get the job done2"
    },
    {
      sno: 1,
      title: "Go to the ghat",
      desc: "You need to go to the market to get the job done3"
    },
  ]
  );
  return (
    <>
      <Header title="My Todos List"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
