import React, { Component } from 'react';

class ModalHeader extends Component {
  render() {
    return(
      <div className="modal-header">
        <span className="close" onClick={this.props.hideModal}>&times;</span>
        <h2 id="title">Add a Recipe</h2>
      </div>
    )
  }
}

export default ModalHeader;