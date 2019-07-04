import React, { Component } from 'react';
import ModalHeader from './modal_header';
import ModalBody from './modal_body';
import ModalFooter from './modal_footer';
import './modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    let modal_content = document.getElementById("modal-content");
    modal_content.classList.add('modal-content');
  }

  hideModal() {
    let modal = document.getElementById('myModal');
    let modal_content = document.getElementById("modal-content");
    modal_content.classList.add('hide-modal');
    setTimeout(() => {
      modal.style.display = "none";
      modal_content.className = "";
    }, 400)
  }

  render() {
    return(
      <div>
        <button onClick={this.showModal} className="btn btn-primary add-recipe">Add Recipe</button>
        <div id="myModal" className="modal">
          <div id="modal-content">
            <ModalHeader hideModal={this.hideModal} />
            <ModalBody />
            <ModalFooter hideModal={this.hideModal}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;