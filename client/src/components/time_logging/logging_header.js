import React, { Component } from 'react';

class LogginHeader extends Component {
  render() {
    return(
      <div className="modal-header">
        <span className="close" onClick={this.props.hideModal}>&times;</span>
        <h2 id="title">Add a Time</h2>
      </div>
    )
  }
}

export default LogginHeader;