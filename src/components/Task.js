import React from 'react'
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'



const TASKS_STATUSES = ["Unstarted", "In Progress", "Completed"];

const Task = (props) => {
  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }

  function onDeleteTask() {
    props.onDeleteTask(props.task.id);
  }

  return (
    <>
      <form onChange={onStatusChange}>
        <select defaultValue={props.task.status}>
          {TASKS_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </form>
      <hr />
      <h5
        className="card-title mt-3 text-uppercase px-2"
        style={{ color: "#3a4" }}
      >
        {props.task.title}
      </h5>
      <p className="card-text mb-3 text-muted font-weight-bold px-2">
        {props.task.description}
      </p>
      <div>
        {" "}
        <button
          className="btn btn-danger mb-5 ml-2"
          onClick={() => onDeleteTask(props.task.id)}
        >
          remove
        </button>
      </div>
    </>
  );
};

export default Task;

