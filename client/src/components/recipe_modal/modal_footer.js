import React, { Component } from 'react';

class ModalFooter extends Component {
  render() {
    return(
      <div className="modal-footer">
        <button className="btn" onClick={this.props.hideModal}> Close </button>
        <button className="btn btn-primary" id="add" onClick={this.props.handleAddTask}>Add a Task</button>
      </div>
    )
  }
}

export default ModalFooter;