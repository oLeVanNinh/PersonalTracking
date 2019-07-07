import React, { Component } from 'react';

class Task extends Component {
  render() {
    return(
      <div className="panel">
        <h3>First Task</h3>
        <p className="ingredient-component">Start Date</p>
        <p className="ingredient-component">Spend Time</p>
        <p className="ingredient-component">Remain Time</p>
        <p className="ingredient-component">Averge time caculate for each day</p>
        <p className="ingredient-component">End Date</p>
        <div className="button">
          <button className="btn btn-danger">Delete</button>
          <button className="btn">Edit</button>
        </div>
      </div>
    )
  }
}

export default Task;