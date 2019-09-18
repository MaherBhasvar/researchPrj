import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ExcelForm from '../forms/ExcelForm';

class UpdateModal extends React.Component {

    state = {
        modal: this.props.modal
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div className="Modal">

                <Modal isOpen={this.state.modal} toggle={this.props.updateRecord} >
                    <ModalHeader toggle={this.props.updateRecord}> Update Entry</ModalHeader>
                    <ModalBody>

                        <ExcelForm user={this.props.selectedUserForUpdate} />

                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.props.updateRecord}>Update</Button>{' '}
                        <Button color="secondary" onClick={this.props.updateRecord}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default UpdateModal;