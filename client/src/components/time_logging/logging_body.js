import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class LoggingBody extends Component {
  render() {
    const {handleTime, spent_time, selected_date, errors, handleDate }  = this.props;
    return(
      <div className="modal-body">
        <form className="form">
          <div className="form-group">
            <label>Hours spent for this task?</label>
            {errors["spent_time"] && <p className="form-error">{errors["spent_time"]}</p>}
            <input type="text" pattern="^\d+.{0,1}(\d{1,2})?$" placeholder="The hours that you want to spent for this task" className="form-control"
              onChange={handleTime} value={spent_time}/>
          </div>

          <div className="form-group">
            <label>The Date</label>
            {errors["end_date"] && <p className="form-error">{errors["end_date"]}</p>}
            <DatePicker selected={selected_date} onChange={handleDate}/>
          </div>
        </form>
      </div>
    )
  }
}

export default LoggingBody;