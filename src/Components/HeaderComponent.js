import React, {Component,Fragment} from 'react';
import{Navbar} from 'reactstrap'

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){

        return(
            <Fragment>
                <Navbar dark className="sticky-top navbar-cust">
                    <div className="container">
                        <h4 className="navbar-text">Movie Showcase</h4>
                    </div>
                </Navbar>
            </Fragment>
        );
    }

}