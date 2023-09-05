import React,{Component} from 'react';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
  class R048_ReactstrapModal extends Component {
    constructor(props){
      super(props);
      this.state={modal: false}
    }
    toggle = () =>{
      this.setState({modal: !this.state.modal})
    }
  render() {
    return (
      <>
        <Button color="warning" onClick={this.toggle}>modal 버튼</Button>
        <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>modal header</ModalHeader>
          <ModalBody>
            asjdfklasjdflkasjdflkjlk
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>확인</Button>
            <Button color='secondary' onClick={this.toggle}>닫기</Button>
          </ModalFooter>
        </Modal>
      </>

    )
  }
}
export default R048_ReactstrapModal;