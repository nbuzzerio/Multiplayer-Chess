import {createStore, combineReducers} from 'redux';

// import reducers
import boardReducer from './reducers/boardReducer.js';

export default createStore(
    combineReducers({
        //put reducers here
        board: boardReducer,
    })
)