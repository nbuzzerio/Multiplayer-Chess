import {createStore, combineReducers} from 'redux';

// import reducers
import boardReducer from './reducers/boardReducer.js';
import windowReducer from './reducers/windowReducer.js';

export default createStore(
    combineReducers({
        //put reducers here
        boardProps: boardReducer,
        windowHeight: windowReducer     
    })
)