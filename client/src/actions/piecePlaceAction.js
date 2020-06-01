import setHeldPieceLocation from './heldPieceLocationAction.js';

export default function setPlacedPiece(coord, state) {

  document.removeEventListener('mousemove', setHeldPieceLocation);

    return function (dispatch) {
      var row = Number(coord[0]);
      var col = Number(coord[1]);
      var board = state.board;
      //To keep track of captured pieces we'll have to log these spaces current values first
      board[row][col].piece = state.heldPiece.piece;
      board[row][col].pieceColor = state.heldPiece.pieceColor;
      var lastRow = Number(state.heldPiece.coord[0])
      var lastCol = Number(state.heldPiece.coord[1])
      var turnContinue = false;
      const held = document.getElementById('heldPiece');
      held.innerHTML = '';

        //check if Piece is placed back where it was meaning the turn continues
        if (lastRow === row && lastCol === col) {
          turnContinue = true;
          board[lastRow][lastCol].tileColor = state.heldPiece.tileColor;
        } else {
          board[lastRow][lastCol].tileColor = state.heldPiece.tileColor;
          board[lastRow][lastCol].piece = '';
          board[lastRow][lastCol].pieceColor = '';
        }
        
      var lobby = state.lobby;
      /////////////////////////////////
        if (state.turn === 'white') {
        var turn = turnContinue ? 'white' : 'black'
        //create newGame if lobby does not exist
        fetch('/updateGame', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({lobby: lobby, board: board, turn: turn})
        })
        .then(response => response.json())
        .then((data) => {
          dispatch({
            type: 'server/SET_PLACED_PIECE',
            payload: {board: board,
              holdingPiece: false, 
              heldPiece: {
                coord: '',
                piece: '',
                pieceColor: '',
                tileColor: '',
              },
              turn: turn,
              lobby: lobby
            }
          })
        })
        .catch((err) => {
            console.log('Error posting new game lobby: ', err)
        });         
      } else {
        var turn = turnContinue ? 'black' : 'white'
        fetch('/updateGame', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({lobby: lobby, board: board, turn: turn})
        })
        .then(response => response.json())
        .then(() => {
          dispatch({
            type: 'server/SET_PLACED_PIECE',
            payload: {board: board,
            holdingPiece: false, 
            heldPiece: {
              coord: '',
              piece: '',
              pieceColor: '',
              tileColor: ''
            },
            turn: turn,
            lobby: lobby
            }
          })
        })
        .catch((err) => {
            console.log('Error posting new game lobby: ', err)
        });         
      }
    }
}