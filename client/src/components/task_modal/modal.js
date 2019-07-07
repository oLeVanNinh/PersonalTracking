import React, { Component } from 'react';
import ModalHeader from './modal_header';
import ModalBody from './modal_body';
import ModalFooter from './modal_footer';
import './modal.css';

const axios = require('axios');

class Modal extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: null,
        total_time: '',
        start_date: new Date(),
        end_date: null,
        errors: {}
      }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleTaskName = this.handleTaskName.bind(this);
    this.handleTotalTime = this.handleTotalTime.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  showModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    let modal_content = document.getElementById("modal-content");
    modal_content.classList.add('modal-content');
  }

  hideModal() {
    let modal = document.getElementById('myModal');
    let modal_content = document.getElementById("modal-content");
    modal_content.classList.add('hide-modal');
    setTimeout(() => {
      modal.style.display = "none";
      modal_content.className = "";
    }, 400)
  }

  handleTaskName(e) {
    this.setState({ name: e.target.value })
  }

  handleTotalTime(e) {
    const time = e.target.validity.valid ? e.target.value : this.state.total_time;
    this.setState({ total_time: time });
  }

  handleStartDate(date) {
    this.setState({ start_date: date })
  }

  handleEndDate(date) {
    this.setState({ end_date: date })
  }

  handleAddTask() {
    if (this.formValidation()) {
      axios.post('http://localhost:3001/task/create', {
        task: {
          name: this.state.name,
          total_time: this.state.total_time,
          start_date: this.state.start_date,
          end_date: this.state.end_date
        }
      })
      .then((response) => {
        this.hideModal();
        setTimeout(() => {
          this.props.fetchallTask();
        }, 400);
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  formValidation() {
    let errors = {};
    let form_valid = true;
    let current_state = this.state;
    if (current_state.name === null || current_state.name === "") {
      form_valid = false;
      errors["name"] = "Name is required"
    }

    if (current_state.total_time === "") {
      form_valid = false;
      errors["total_time"] = "Spend time is required"
    }

    if (current_state.end_date === null) {
      form_valid = false;
      errors["end_date"] = "End date is required"
    }

    if (current_state.end_date !== null && current_state.end_date.valueOf() < current_state.start_date.valueOf()) {
      form_valid = false;
      errors["end_date"] = "End date is not valid"
    }

    this.setState({errors: errors})
    return form_valid;
  }

  render() {
    return(
      <div>
        <button onClick={this.showModal} className="btn btn-primary add-recipe">Add Recipe</button>
        <div id="myModal" className="modal">
          <div id="modal-content">
            <ModalHeader hideModal={this.hideModal} />
            <ModalBody handleTaskName={this.handleTaskName} handleTotalTime={this.handleTotalTime} handleStartDate={this.handleStartDate}
              handleEndDate={this.handleEndDate} start_date={this.state.start_date} end_date={this.state.end_date} total_time={this.state.total_time} errors={this.state.errors}/>
            <ModalFooter hideModal={this.hideModal} handleAddTask={this.handleAddTask}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;