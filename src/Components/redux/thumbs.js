import * as ActionTypes from './ActionTypes';

export const Thumbs = (state = {
    isLoading:true,
    errMess:null,
    thumbs: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_THUMB:
            console.log("add_thumb", action.payload.results);
            
            return{...state, isLoading: false, errMess: null, thumbs: action.payload.results};
        
        case ActionTypes.THUMB_LOADING:          
            return{...state, isLoading: true, errMess: null, thumbs: []};
        
        case ActionTypes.THUMB_FAILED:
            return{...state, isLoading: false, errMess: action.payload};
        
        default:
            return state;
    }
}