import React, { Component } from 'react';
import Modal from '../task_modal/modal';
import Tasks from '../tasks/tasks';
import './App.css';

class  App extends Component {
  render() {
    return(
      <div>
        <Tasks />
        <Modal />
      </div>
    )
  }
}


export default App;
