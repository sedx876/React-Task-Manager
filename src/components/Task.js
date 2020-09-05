import React from 'react'

const Task = (props) => {
  return (
    <div>
      <h5>{props.task.status}</h5>
      <h2>{props.task.title}</h2>
      <p>{props.task.description}</p>
    </div>
  )
}

export default Task
