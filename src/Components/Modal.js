import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class Example extends Component {
  constructor(props, context) {
    super(props, context);
  
    this.state = {
      showModal: false
    };
  
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  
  open() {
    this.setState({showModal: true});
  }
  
  close() {
    this.setState({showModal: false});
  }
  
 
  
  render() {
    return(
      <div>
        <div>I am a Bootstrap Modal</div>
        <Button onClick={this.open.bind(this)}>Show Modal</Button>
        <div>
          <Modal className="modal-container" 
            show={this.state.showModal} 
            onHide={this.close}
            bsSize="small" backdrop={false}
            >
  
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
  
            <Modal.Body>
              One of fine body.........
            </Modal.Body>
  
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>         
          </Modal> 
          
        </div>
      </div>  
     );
    }
  }
  export default Example;