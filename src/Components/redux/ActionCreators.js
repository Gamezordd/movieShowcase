import * as ActionTypes from './ActionTypes';
import * as URLs from '../shared/baseUrl';

export const addThumb = (movies) => ({
    type: ActionTypes.ADD_THUMB,
    payload: movies
});

export const thumbLoading = () => ({
    type: ActionTypes.THUMB_LOADING
});

export const thumbFailed = (errmess) =>({
    type:ActionTypes.THUMB_FAILED,
    payload: errmess
})

export const fetchMovies = (page) => (dispatch) => {
    dispatch(thumbLoading(true));
    return fetch(URLs.listBaseUrlpre + URLs.api_key + URLs.listBaseUrlpost + page)
    
        .then(response => {
            if (response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ":" + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            console.log("error thrown");
            
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(thumbs => dispatch(addThumb(thumbs)))
        .catch(error => dispatch(thumbFailed(error.message)))
}