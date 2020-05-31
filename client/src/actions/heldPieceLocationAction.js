import store from '../store.js'

export function setHeldPieceLocation(e) {
    
    var board = store.getState().clientProps.boardDimensions;
    var lobby = store.getState().boardProps.lobby;
    console.log(lobby, 'afjlksd;jfkl;asdjfl;kadsjflk;asdjflk;asdjflk;adsj')
    //removes space as if board begins at top right corner of window
    var left = e.clientX - board.left;
    var top = e.clientY - board.top;
    //ratio of cursor on board axes
    var boardXratio = left / board.width
    var boardYratio = top / board.height

    if (window.timer === undefined || (new Date().getTime() - window.timer > 50)) {
        window.timer = new Date().getTime();
        return function (dispatch) {
            dispatch({   
                type: 'server/SET_HELD_PIECE_LOCATION',
                payload: {
                    boardXratio,
                    boardYratio,
                    boardLocation: board,
                    lobby: lobby
                }
            })
        }
    } 

    return {
        type:'NO NO_ACTION'
    }
}