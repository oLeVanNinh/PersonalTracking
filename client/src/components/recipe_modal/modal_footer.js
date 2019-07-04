import React, { Component } from 'react';

class ModalFooter extends Component {
  render() {
    return(
      <div className="modal-footer">
        <button className="btn"> Close </button>
        <button className="btn btn-primary" id="add">Add a Recipe</button>
      </div>
    )
  }
}

export default ModalFooter;