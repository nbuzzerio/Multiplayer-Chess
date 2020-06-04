import store from '../../store.js'

export default function pawns(tile) {
    var state = store.getState();
    var board = state.boardProps.board;
    var validMoves = state.boardProps.validMoves;

    var row = Number(tile.coord[0]);
    var col = Number(tile.coord[1]);

    //placing the piece back down will always be valid
    board[row][col].validMove = true;
    validMoves.push({row: row, col: col});

    if (tile.pieceColor === 'white') {
        if (tile.coord[0] === '6') {
            if (board[row-1][col].pieceColor === '' && board[row-2][col].pieceColor === '') {
                board[row-1][col].validMove = true;
                validMoves.push({row: row-1, col: col});
                board[row-2][col].validMove = true;
                validMoves.push({row: row-2, col: col});
            }
        }  else {
            //check for enPassant
            if (tile.coord[0] === '3') {
                if (board[row][col-1] && board[row][col-1].pieceColor === 'black' && board[row][col-1].enPassant){
                    board[row-1][col-1].validMove = true;
                    validMoves.push({row: row-1, col: col-1});
                } else if (board[row][col+1] && board[row][col+1].pieceColor === 'black' && board[row][col+1].enPassant){
                    board[row-1][col+1].validMove = true;
                    validMoves.push({row: row-1, col: col+1});
                }
            }
        }
        //check normal pawn movement
        if (board[row-1][col].pieceColor === '') {
            board[row-1][col].validMove = true;
            validMoves.push({row: row-1, col: col});
        }
        if (board[row-1][col-1] && board[row-1][col-1].pieceColor === 'black') {
            board[row-1][col-1].validMove = true;
            validMoves.push({row: row-1, col: col-1});
        }
        if (board[row-1][col+1] && board[row-1][col+1].pieceColor === 'black') {
            board[row-1][col+1].validMove = true;
            validMoves.push({row: row-1, col: col+1});
        }

    } else if (tile.pieceColor === 'black') {
        if (tile.coord[0] === '1') {
            if (board[row+1][col].pieceColor === '' && board[row+2][col].pieceColor === '') {
                board[row+1][col].validMove = true;
                validMoves.push({row: row+1, col: col});
                board[row+2][col].validMove = true;
                validMoves.push({row: row+2, col: col});
            }
        }  else {
            //check for enPassant
            if (tile.coord[0] === '4') {
                if (board[row][col-1] && board[row][col-1].pieceColor === 'white' && board[row][col-1].enPassant){
                    board[row+1][col-1].validMove = true;
                    validMoves.push({row: row+1, col: col-1});
                } else if (board[row][col+1] && board[row][col+1].pieceColor === 'white' && board[row][col+1].enPassant){
                    board[row+1][col+1].validMove = true;
                    validMoves.push({row: row+1, col: col+1});
                }
            }
        }
        //check normal pawn movement
        if (board[row+1][col].pieceColor === '') {
            board[row+1][col].validMove = true;
            validMoves.push({row: row+1, col: col});
        }
        if (board[row+1][col-1] && board[row+1][col-1].pieceColor === 'white') {
            board[row+1][col-1].validMove = true;
            validMoves.push({row: row+1, col: col-1});
        }
        if (board[row+1][col+1] && board[row+1][col+1].pieceColor === 'white') {
            board[row+1][col+1].validMove = true;
            validMoves.push({row: row+1, col: col+1});
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