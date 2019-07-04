import React, { Component } from 'react';

class ModalBody extends Component {
  render() {
    return(
      <div className="modal-body">
        <form className="form">
          <div className="form-group">
            <label>Recipe</label>
            <input type="text" placeholder="Recipe Name" className="form-control" />
          </div>

          <div className="form-group">
            <label>Ingredients</label>
            <input type="textarea" placeholder="Enter Ingredients, Separated By Commas" className="form-control" />
          </div>
        </form>
      </div>
    )
  }
}

export default ModalBody;