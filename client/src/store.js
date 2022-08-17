import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import boardReducer from './reducers/boardReducer.js';
import clientReducer from './reducers/clientReducer.js';


import createSocketIOMiddleware from 'redux-socket.io';
import {Manager} from 'socket.io-client';

const manager = new Manager(window.location.origin, {
    path: "/chess-socket/"
});

export const socket = manager.socket("/", {})
console.log('socket: ', socket)
const socketIoMiddleware = createSocketIOMiddleware(socket, 'server/');

socket.on('newConnection', (msg) => {
    console.log(msg)
})

socket.on('newDisconnection', (msg) => {
    console.log(msg)
})

socket.on('joinRoom', (msg) => {
    console.log(msg)
})

export default createStore(
    combineReducers({
        boardProps: boardReducer,
        clientProps: clientReducer     
    }), applyMiddleware(thunk, socketIoMiddleware)
);




