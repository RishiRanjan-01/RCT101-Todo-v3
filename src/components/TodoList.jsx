import React from "react";
import "./TodoList.css";
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
import "https://kit.fontawesome.com/24c494a6b6.js";

const TodoList = ({ title, id, status,handleChange,HandleDelete }) => {
  return (
    <div className="showdiv" style={{backgroundColor:status?'Green':'white'}}>
      <div className="item">
        <input type="checkbox" onChange={()=>handleChange(id)} />
        <h3 style={{textDecoration:status?'line-through':'none'}}>{title}</h3>
      </div>
      <div>
        <i style={{color:status?'white':'Yellow'}} class="fa-solid fa-star"></i>
        <i onClick={()=>HandleDelete(id)} class="fa-solid fa-trash-can"></i>
      </div>
      
    </div>
  );
};

export default TodoList;
