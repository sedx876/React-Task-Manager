import React, { useState } from 'react'
import PropTypes from "prop-types";
import TasksList from './TasksList'


const TASKS_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const TasksPage = (props) => {
  const [cardForm, showCardForm] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const onCreateTask = (e) => {
    e.preventDefault();
    props.onCreateTask({
      title,
      description,
    });
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    formToggler(false);
  };

  const formToggler = () => {
    showCardForm(!cardForm)
  }

  const renderTaskLists = () => {
    const {tasks} = props 
    return TASKS_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter(task => task.status === status)
      return (
        <div className="col-md-3 card m-2 p-0" key={id}>
        <TasksList 
        key={status} 
        status={status} 
        tasks={statusTasks} 
        onStatusChange={props.onStatusChange}
        onDeleteTask={props.onDeleteTask} />
        </div>
      )
    })
  }

  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <div
              className="btn btn-success m-3"
              style={{ borderRadius: "50%", fontSize: "1rem" }}
              onClick={formToggler}
            >
              +
            </div>
          </div>
          <div className="col-md-10">
            <div className="display-4 text-center text-uppercase">
              Task Manager
            </div>
          </div>
        </div>
        {cardForm && (
          <form onSubmit={onCreateTask}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Task"
                onChange={onChangeTitle}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Task Description"
                onChange={onChangeDescription}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
      <div
        className="row d-flex justify-content-center position-relative"
        style={{ background: "#e9ecef" }}
      >
        {renderTaskLists()}
      </div>
    </div>
  );
};

TasksPage.propTypes = {
  cardForm: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};


export default TasksPage
