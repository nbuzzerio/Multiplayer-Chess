import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import createSocketIOMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIOMiddleware(socket, "server/");

socket.on('newConnection', (msg) => {
    console.log(msg)
})
socket.on('newDisconnection', (msg) => {
    console.log(msg)
})


import boardReducer from './reducers/boardReducer.js';
import clientReducer from './reducers/clientReducer.js';

export default createStore(
    combineReducers({
        boardProps: boardReducer,
        clientProps: clientReducer     
    }), applyMiddleware(thunk, socketIoMiddleware)
);