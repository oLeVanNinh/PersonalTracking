import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ModalBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: null
    };
    this.handleStartDateChange = this.handleStartChangeDate.bind(this);
    this.handEndDateChange = this.handEndDateChange.bind(this);
  }

  handleStartChangeDate(date) {
    this.setState({
      startDate: date
    })
  }

  handEndDateChange(date) {
    this.setState({
      endDate: date
    })
  }

  render() {
    return(
      <div className="modal-body">
        <form className="form">
          <div className="form-group">
            <label>Task Name</label>
            <input type="text" placeholder="Task Name" className="form-control" />
          </div>

          <div className="form-group">
            <label>How many hours want spent for this task?</label>
            <input type="textarea" placeholder="The hours that you want to spent for this task" className="form-control" />
          </div>

          <div className="form-group">
            <label>Date start from?</label>
            <DatePicker selected={this.state.startDate} onChange={this.handleStartChange}/>
          </div>

          <div className="form-group">
            <label>Task end at?</label>
            <DatePicker selected={this.state.endDate} onChange={this.handEndDateChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default ModalBody;