import React, { Component } from 'react';
import axios from 'axios';
import Modal from '../task_modal/modal';
import Tasks from '../tasks/tasks';
import Logging from '../time_logging/logging';
import './App.css';

class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task_id: null
    }
    this.fetchallTask = this.fetchallTask.bind(this);
    this.showLoggingModal = this.showLoggingModal.bind(this);
   }

   showLoggingModal(e) {
    let modal = document.getElementById("myLoggingModal");
    let task_id = e.target.parentElement.parentElement.id;
    this.setState({task_id: task_id})
    modal.style.display = "block";
    let modal_content = document.getElementById("logging-modal-content");
    modal_content.classList.add('modal-content');
  }

  componentDidMount() {
    this.fetchallTask()
  }

  fetchallTask() {
    axios.get('/task/index')
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
        <Tasks tasks={this.state.tasks} showLoggingModal={this.showLoggingModal} />
        <Modal fetchallTask={this.fetchallTask} />
        <Logging task_id={this.state.task_id} />
      </div>
    )
  }
}


export default App;
