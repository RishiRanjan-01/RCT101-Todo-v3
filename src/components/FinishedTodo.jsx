import React from 'react'
import './FinishedTodo.css'

const FinishedTodo = ({id,status,title}) => {
  console.log(id,status,title)
  return (
    <div className='showdiv1'>
      <div className="item1">
        <h3>{title}</h3>
      </div>
      <div>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-trash-can"></i>
      </div>
    </div>
  )
}

export default FinishedTodo