import React, { useState } from 'react'
import './TodoInput.css'
const TodoInput = ({ onClick }) => {
    const [title,setTitle] = useState("")
  return (
    <div className='inputMainDiv'>
        <input type="text" value={title} placeholder="Add Your Task Here" onChange={(e)=>setTitle(e.target.value)}/>
        <button className='addButton' onClick={()=>{onClick(title); setTitle("")}}>+</button>
    </div>
  )
}

export default TodoInput