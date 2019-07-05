import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ModalBody extends Component {
  render() {
    const { handleTaskName, handleTotalTime, handleStartDate, handleEndDate, start_date, end_date, total_time }  = this.props;
    return(
      <div className="modal-body">
        <form className="form">
          <div className="form-group">
            <label>Task Name</label>
            <input type="text" placeholder="Task Name" className="form-control" onChange={handleTaskName} />
          </div>

          <div className="form-group">
            <label>How many hours want spent for this task?</label>
            <input type="text" pattern="[0-9]*" placeholder="The hours that you want to spent for this task" className="form-control"
              onChange={handleTotalTime} value={total_time} />
          </div>

          <div className="form-group">
            <label>Date start from?</label>
            <DatePicker selected={start_date} onChange={handleStartDate} />
          </div>

          <div className="form-group">
            <label>Task end at?</label>
            <DatePicker selected={end_date} onChange={handleEndDate}/>
          </div>
        </form>
      </div>
    )
  }
}

export default ModalBody;