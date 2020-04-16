import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Thumbs} from './thumbs';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            thumbs: Thumbs
        }),

        applyMiddleware(thunk)
    );

    return store;
}