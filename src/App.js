import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootswatch/dist/sketchy/bootstrap.min.css'
import Task from './components/Task'
import TasksList from './components/TasksList'
import TasksPage from './components/TasksPage'
import {connect} from 'react-redux'


function App(props) {
  return (
    <div className="App">
      
      <TasksPage tasks={props.tasks} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps) (App);
