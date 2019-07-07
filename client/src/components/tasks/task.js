import React, { Component } from 'react';

class Task extends Component {
  render() {
    const task = this.props.task
    return(
      <div className="panel">
        <h3>{task["name"]}</h3>
        <p className="ingredient-component">Start Date: {task["start_date"]}</p>
        <p className="ingredient-component">Spend Time: {task["spent_time"]} hours</p>
        <p className="ingredient-component">Remain Time: {task["remain_time"]} hours</p>
        <p className="ingredient-component">Remain Day: {task["remain_day"]} days</p>
        <p className="ingredient-component">Average time caculate for each day: {task["average_time"]} hours</p>
        <p className="ingredient-component">End Date: {task["end_date"]}</p>
        <div className="button">
          <button className="btn btn-danger">Delete</button>
          <button className="btn">Edit</button>
        </div>
      </div>
    )
  }
}

export default Task;