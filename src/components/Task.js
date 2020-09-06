import React from 'react'



const TASKS_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const Task = (props) => {
  return (
    <>
      {/* <h5>{props.task.status}</h5> */}
      <h2 className="card-title mt-3 text-uppercase px-2"
      style={{color: '#3a4'}}>{props.task.title}</h2>
      <p className="card-text mb-3 text-muted font-weight-bold px-2">{props.task.description}</p>
    </>
  )
}

export default Task
