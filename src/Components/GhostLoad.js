import React, {Component} from 'react';
import {Card} from 'reactstrap';
import {Loading} from './LoadingComponent'

export default class Ghost extends Component {
    render(){
        console.log("Loading");
        
        return(
            <div className="row mx-2 my-5 justify-content-center">
                <div className="col-md-3 my-2">
                <Card><Loading /></Card>
                </div>
                <div className="col-md-3 my-2">
                <Card><Loading /></Card>
                </div>
                <div className="col-md-3 my-2">
                <Card><Loading /></Card>
                </div>
                <div className="col-md-3 my-2">
                <Card><Loading /></Card>
                </div>
            </div>
        );
    }
}