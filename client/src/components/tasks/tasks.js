import React, { Component } from 'react';
import axios from 'axios';
import Task from './task';
import './tasks.css';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.fetchallTask = this.fetchallTask.bind(this);
  }

  handleClick(e) {
    let target = e.target;
    target.classList.toggle("active");
    let panel = target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    }
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  componentDidMount() {
    this.fetchallTask()
  }

  fetchallTask() {
    axios.get('http://localhost:3001/task/index')
      .then((response) => {
        this.setState({tasks: response.data["tasks"]})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return(
      <div className="task">
        <h2>Manage Task</h2>
        {this.state.tasks.length > 0 && this.state.tasks.map((task) =>
          <div key={task["id"]}>
            <button className="accordion" onClick={this.handleClick}>{task["name"]}</button>
            <Task task={task}/>
          </div>
        )}
      </div>
    )
  }
}

export default Tasks;