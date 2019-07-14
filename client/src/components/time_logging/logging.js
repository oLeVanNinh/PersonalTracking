// Todo: refactor after

import React, { Component } from 'react';
import LoggingHeader from './logging_header';
import LoggingBody from './logging_body';
import LoggingFooter from './logging_footer';
import './logging.css';

const axios = require('axios');

class Logging extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: null,
        total_time: '',
        start_date: new Date(),
        end_date: null,
        errors: {}
      }
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    let modal = document.getElementById('myLoggingModal');
    let modal_content = document.getElementById("logging-modal-content");
    modal_content.classList.add('hide-modal');
    setTimeout(() => {
      modal.style.display = "none";
      modal_content.className = "";
    }, 400)
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
        <div id="myLoggingModal" className="modal">
          <div id="logging-modal-content">
            <LoggingHeader hideModal={this.hideModal} />
            <LoggingBody errors={this.state.errors}/>
            <LoggingFooter hideModal={this.hideModal} handleAddTask={this.handleAddTask}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Logging;