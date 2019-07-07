import React, { Component } from 'react';
import Task from './task';
import './tasks.css';

class Tasks extends Component {
  constructor(props) {
    super(props);
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
    return(
      <div className="task">
        <h2>Manage Task</h2>
        <div>
          <button className="accordion" onClick={this.handleClick}>First Task</button>
          <Task />
        </div>
      </div>
    )
  }
}

export default Tasks;