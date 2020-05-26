import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import boardReducer from './reducers/boardReducer.js';
import windowReducer from './reducers/windowReducer.js';

export default createStore(
    combineReducers({
        boardProps: boardReducer,
        windowHeight: windowReducer     
    }), applyMiddleware(thunk)
);