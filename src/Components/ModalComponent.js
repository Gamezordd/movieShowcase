import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap';

export default class ModalComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen: this.props.isModalOpen
        }
        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render(){
        console.log("insideMdalcomponent", this.state.isModalOpen);
        console.log("childeelement", this.props.element);
        
        return(
            <Modal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()}>
                <ModalHeader><span className="fa fa-chevron-left fa-lg" onClick={() => this.toggleModal()}/> About Movie</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="6">
                            {this.props.element.artwork}
                        </Col>
                        <Col md="6">
                            <Row>
                                {this.props.element.title}
                            </Row>
                            <Row>
                                {this.props.element.description}
                            </Row>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        );
    }

}