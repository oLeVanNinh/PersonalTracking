// Todo: refactor after

import React, { Component } from 'react';
import LoggingHeader from './logging_header';
import LoggingBody from './logging_body';
import LoggingFooter from './logging_footer';
import './logging.css';

const axios = require('axios');
const base_url = process.env.REACT_APP_SERVER_URL

class Logging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spent_time: '',
      selected_date: new Date(),
      errors: {}
    }
    this.hideModal = this.hideModal.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleLogging = this.handleLogging.bind(this);
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

  handleDate(date) {
    this.setState({selected_date: date});
  }

  handleLogging() {
    if (this.formValidation()) {
      axios.post(base_url + '/logging_time/create', {
        logging_time: {
          spent_time: this.state.spent_time,
          date: this.state.selected_date,
          task_id: this.props.task_id
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

  render() {
    const state = this.state;
    return(
      <div>
        <div id="myLoggingModal" className="modal">
          <div id="logging-modal-content">
            <LoggingHeader hideModal={this.hideModal} />
            <LoggingBody errors={state.errors} handleTime={this.handleTime} spent_time={state.spent_time} selected_date={state.selected_date} handleDate={this.handleDate} />
            <LoggingFooter hideModal={this.hideModal} handleLogging={this.handleLogging}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Logging;