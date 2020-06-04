import store from '../../store.js'

export default function kings(tile) {

    var state = store.getState();
    var board = state.boardProps.board;
    var validMoves = state.boardProps.validMoves;
    var heldPieceColor = tile.pieceColor;

    var row = Number(tile.coord[0]);
    var col = Number(tile.coord[1]);

    //placing the piece back down will always be valid
    board[row][col].validMove = true;
    validMoves.push({row: row, col: col});

    var rowPlus = row+1;
    var rowMinus = row-1;
    var colPlus = col+1;
    var colMinus = col-1;


    for (var i = rowMinus; i < rowPlus+1; i++) {

        if (i > -1 && i < 8) {
        
            for (var j = colMinus; j < colPlus+1; j++) {

                if (j > -1 && j < 8) {
          
                    if (board[i][j].pieceColor !== heldPieceColor) {
                        board[i][j].validMove = true;
                        validMoves.push({row: i, col: j});
                    }

                }
          
            }
        }
    }

    return {
        type: 'SET_VALID_MOVES',
        payload: {
            board: board,
            validMoves: validMoves
        }
    }
}