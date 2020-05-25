import store from '../store.js'

export function setNewOrContinueBoard(lobby, newGame) {
    
    
    //fetch board state by lobby

    var board; //will set result of fetch for lobby

    //if 


    if (board) {//if lobby already exists return board payload as state it was in
        return {
            type: 'SET_BOARD',
            payload: {
                board: board,
                lobby: lobby
            }
        }
    } else if (newGame && !board) { //create brand new board using board action if newGame button was clicked and board did not exist for that lobby
        store.dispatch(setBoard(lobby));
    } else if (newGame && board) {
        return {
            type: 'SET_LOBBY_TAKEN',
            payload: true
        }
    } else {
        return {
            type: 'SET_LOBBY_EXISTS',
            payload: false
        }
    }
}