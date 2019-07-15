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
      spent_time: '',
      errors: {}
    }
    this.hideModal = this.hideModal.bind(this);
    this.handleTime = this.handleTime.bind(this);
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

    if (current_state.spent_time === "") {
      form_valid = false;
      errors["spent_time"] = "Spend time is required"
    }

    this.setState({errors: errors})
    return form_valid;
  }

  handleTime(e) {
    const spent_time = e.target.validity.valid ? e.target.value : this.state.spent_time;
    this.setState({ spent_time: spent_time });
  }

  render() {
    return(
      <div>
        <div id="myLoggingModal" className="modal">
          <div id="logging-modal-content">
            <LoggingHeader hideModal={this.hideModal} />
            <LoggingBody errors={this.state.errors} handleTime={this.handleTime} spent_time={this.state.spent_time}/>
            <LoggingFooter hideModal={this.hideModal} handleAddTask={this.handleAddTask}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Logging;