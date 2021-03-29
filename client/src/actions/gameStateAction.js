import store from '../store.js';
import { socket } from '../store.js';
import { setBoard } from './boardAction.js';
import socketMessage from './socketMessage.js';

export default function setNewOrContinueBoard(lobby, name, newGame) {
    //return a function with parameter dispatch for thunk to handle
    return function (dispatch) {
        var state = store.getState();

        if (newGame) {
            //create newGame if lobby does not exist
            fetch(`${window.location.origin}/newGame`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({lobby: lobby, board: state.boardProps.board, turn: state.boardProps.turn})
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    //lobby was taken so newGame was not created
                    dispatch({
                        type: 'SET_LOBBY_TAKEN',
                        payload: true
                    })
                } else {
                    socket.on(`Room-${lobby}`, (msg) => {
                        store.dispatch(socketMessage('Chess', msg))
                    })
                    socket.emit('joinRoom', lobby, name)

                    //lobby was free so newGame was created
                    store.dispatch(setBoard(lobby));
                }
            })
            .catch((err) => {
                console.log('Error posting new game lobby: ', err)
            });         
        } else {
            //fetch board state by lobby
            fetch(`${window.location.origin}/resumeGame`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({lobby: lobby})
            })
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) { //lobby not found
                    dispatch({
                        type: 'SET_LOBBY_EXISTS',
                        payload: false
                    })
                } else {
                    socket.on(`Room-${lobby}`, (msg) => {
                        store.dispatch(socketMessage('Chess', msg));
                    })
                    socket.emit('joinRoom', lobby, name)

                    //lobby was free so newGame was created
                    store.dispatch(setBoard(lobby));

                    dispatch({
                        type: 'SET_RESUME_GAME',
                        payload: {
                            board: data[0].board,
                            lobby: data[0].lobby,
                            turn: data[0].turn     
                        }
                    })
                }
            })
            .catch((err) => {
                console.log('Error posting resume game with lobby: ', err)
            });   
        }
    }
}