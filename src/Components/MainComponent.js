import React, {Component} from 'react';
import debounce from "lodash.debounce";
import {connect} from 'react-redux';
import {fetchMovies} from './redux/ActionCreators'
import Ghost from './GhostLoad';
import MovieDetail from './MovieDetailComponent';

const mapDispatchToProps = (dispatch) => ({
    fetchMovies: (page) => dispatch(fetchMovies(page))
});

const mapStateToProps = state => {
    return{
      thumbs: state.thumbs
    }
  }


class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            content:[],
            page:1,
            currentPage:0,
            firstcall: false
        };

        window.onscroll = debounce(() => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
                this.addContent(this.props.thumbs.thumbs);
            }
        }, 100);
    }

    componentDidMount(){
        this.setState({
            firstcall: true
        });
        this.props.fetchMovies(this.state.page)                
    }

    render(){
        if(this.props.thumbs.isLoading && this.state.firstcall){
            return(
                <div>
                    <Ghost />
                </div>
            );
        }
        else if(this.props.thumbs.errMess) {
            return(
                <div>
                    <h4>{this.props.thumbs.errMess}</h4>
                </div>
            )
        }
        else {
            if(this.state.firstcall){
                this.addContent(this.props.thumbs.thumbs)
                this.setState({
                    firstcall: false
                });
            }
            
            return(
                <MovieDetail content={this.state.content}/>
            );
        }
    }

    addContent(updateContent){
        this.setState({
            content:[...this.state.content, ...updateContent],
            page: this.state.page + 1,
        });
        this.props.fetchMovies(this.state.page);    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

