import React, {Component} from 'react';
import {Card, Modal, ModalHeader, ModalBody, Row, Col, CardFooter} from 'reactstrap';
import Img from 'react-image';
import {Loading} from './LoadingComponent'
import Ghost from './GhostLoad';

export default class MovieDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false,

            }
        this.state2={}

            this.toggleModal=this.toggleModal.bind(this);
    }
  
    toggleModal(element){
        console.log("element:", element);
        this.state2=element;
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        console.log("imagestate: ", this.state2); 
    }

    render(){
        console.log("content:", this.props.content);
        
        return(
            <div>
                <div className="row mx-2 my-5 justify-content-center">
                    {this.props.content.map((element) =>{

                            console.log("adult " ,element.adult);
                         var toShowDescription = element.description;
                         if(element.description.length>200){
                            toShowDescription = element.description.substring(0,200)+"...";
                         }
                         
                         var toShowTitle = element.title;
                         if(element.title.length>35){
                            toShowTitle = element.title.substring(0,35)+"...";
                         }
                        return(
                                <div className="col-md-3 my-auto">
                                    <Card key={element.id} className="my-2">
                                    <div className="container1"> 
                                        <div className="content">
                                            <div className="content-overlay"></div>
                                            <Img className="col-12 m-0 p-0 content-image" 
                                                src={element.artwork} 
                                                loader={<Loading/>}
                                            />
                                            <div className="content-details fadeIn-left" onClick={() => this.toggleModal(element)}>
                                            <h3 className="content-title">{toShowTitle}</h3>
                                            <p className="content-text"> {toShowDescription}</p>
                                            
                                            <span className="fa fa-heart-o button-like" href=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <CardFooter>
                                        <Row className="align-self-center">
                                            <span class="fa fa-imdb fa-2x"></span>  
                                            <CreateRating rating={element.rating}/> 
                                            <Certif cert={element.adult}/>
                                        </Row>
                                    </CardFooter>
                                    </Card> 
                                </div>
                        );
                    })}
                    <Modal isOpen={this.state.isModalOpen} 
                        toggle={() => this.toggleModal(this.state2)} 
                        className="modal-lg">
                        <ModalHeader onClick={() => this.toggleModal(this.state2)}> 
                        <span className="fa fa-chevron-left fa-lg"/>  <i> About Movie</i>
                        </ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md="6">
                                <Img className="col-12 m-0 p-0 content-image" 
                                    src={this.state2.artwork} 
                                    loader={<Loading/>}
                                />
                                </Col>
                                <Col md="6">
                                    <h4 className="modal-text mt-2">{this.state2.title}</h4><hr/>
                                    <p className="modal-text">{this.state2.description}</p>
                                </Col>
                            </Row>
                        </ModalBody>
                    </Modal>
                </div>
                <Ghost/>
            </div>
        );
    }
}

class Certif extends Component{
    render(){
        if(this.props.cert){
        return(
            <h3 className="mature my-auto">R</h3>
        )
        }
        else{
            return(
                <div className="mature my-auto">
                    <span className="fa fa-ticket"></span>
                </div>
            )
        }
    }
}

class CreateRating extends Component{
    render(){
        if ((this.props.rating/2)<=1){
            return(
                <div className="my-auto ml-2">
                <span className="fa fa-star"></span>
                </div>
            )
        }
        else if((this.props.rating/2)<=2){
            return(
            <div className="my-auto ml-2">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>
            )
        }
        else if((this.props.rating/2)<=3){
            return(
            <div className="my-auto ml-2">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>
            )
        }
        else if((this.props.rating/2)<=4){
            return(
            <div className="my-auto ml-2">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>
            )
        }
        else{
            return(
            <div className="my-auto ml-2">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>
            )
    }
}
}