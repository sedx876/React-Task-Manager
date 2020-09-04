import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './components/Task'
import TasksList from './components/TasksList'
import TasksPage from './components/TasksPage'

function App() {
  return (
    <div className="App">
      
      <TasksPage />
    </div>
  );
}

export default App;
