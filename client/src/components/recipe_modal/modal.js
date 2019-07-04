import React, { Component } from 'react';
import ModalHeader from './modal_header';
import ModalBody from './modal_body';
import ModalFooter from './modal_footer';

class Modal extends Component {
  render() {
    return(
      <div>
        <button onClick={this.showModal} className="btn btn-primary add-recipe">Add Recipe</button>
        <div id="myModal" className="modal">
          <ModalHeader hideModal={this.hideModal} />
          <ModalBody />
          <ModalFooter />
        </div>
      </div>
    )
  }
}

export default Modal;