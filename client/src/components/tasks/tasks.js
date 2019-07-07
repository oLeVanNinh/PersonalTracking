import React, { Component } from 'react';
import Task from './task';
import './tasks.css';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    const tasks = this.props.tasks;
    return(
      <div className="task">
        <h2>Manage Task</h2>
        {tasks.length > 0 && tasks.map((task) =>
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