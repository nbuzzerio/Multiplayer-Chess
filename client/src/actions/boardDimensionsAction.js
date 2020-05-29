export function setBoardDimensions() {

    var board = document.getElementById('board').getBoundingClientRect();

    return {
        type: 'SET_BOARD_DIMENSIONS',
        payload: board
    }
}