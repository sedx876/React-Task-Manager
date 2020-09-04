import React from 'react'

const TasksPage = () => {
  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success m-3">+</button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">Task Manager</h2>
          </div>
        </div>
          {/*Input Form */}
          <form>
          <div className="form-group">
          <input type="text" className="form-control" placeholder="Task Title" />
          </div>
          <div className="form-group">
            <textarea type="text" className="form-control" placeholder="Task Description">
            </textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
     </div>
    </div>
  )
}

export default TasksPage
