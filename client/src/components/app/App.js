import React, { Component } from 'react';
import axios from 'axios';
import Modal from '../task_modal/modal';
import Tasks from '../tasks/tasks';
import './App.css';

class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    this.fetchallTask = this.fetchallTask.bind(this);
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
      <div>
        <Tasks tasks={this.state.tasks}/>
        <Modal />
      </div>
    )
  }
}


export default App;
