import React, { Component } from 'react';
import ModalHeader from './modal_header';
import ModalBody from './modal_body';
import ModalFooter from './modal_footer';
import './modal.css';

class Modal extends Component {
  render() {
    return(
      <div>
        <button onClick={this.showModal} className="btn btn-primary add-recipe">Add Recipe</button>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <ModalHeader hideModal={this.hideModal} />
            <ModalBody />
            <ModalFooter />
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;