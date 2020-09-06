import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootswatch/dist/sketchy/bootstrap.min.css'
//import Task from './components/Task'
//import TasksList from './components/TasksList'
import TasksPage from './components/TasksPage'
import {connect} from 'react-redux'
import {editTask, createTask} from './actions'


function App(props) {

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  const onCreateTask = ({ title, description }) => {
    props.dispatch(createTask({ title, description }));
  };

  return (
    <div className="App">
      
      <TasksPage tasks={props.tasks} 
      onStatusChange={onStatusChange} 
      onCreateTask={onCreateTask} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps) (App);
