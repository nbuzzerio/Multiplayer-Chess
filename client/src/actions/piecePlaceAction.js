import setHeldPieceLocation from './heldPieceLocationAction.js';
import translateCoords from './boardLogic/coordTranslater.js';


export default function setPlacedPiece(coord, state, tileProps, name) {

  document.removeEventListener('mousemove', setHeldPieceLocation);

    return function (dispatch) {
      var defender = {
        piece: (tileProps.piece || ''),
        coord: tileProps.coord
      }
      var message;

      var row = Number(coord[0]);
      var col = Number(coord[1]);
      var board = state.board;

      //Promote pawn to queen
      if (state.heldPiece.piece === 'P' && (row === 0 || row === 7) ) {
        state.heldPiece.piece = 'Q'
      }

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

        if (state.turn === 'white') {
        var turn = turnContinue ? 'white' : 'black'
        var move = {
          attacker: turnContinue ? '' : 'white',
          atkPiece: turnContinue ?  '' : state.heldPiece.piece,
          atkFrom: turnContinue ?  '' : state.heldPiece.coord,
          defPiece: turnContinue ? '' : defender.piece,
          defFrom: turnContinue ? '' : defender.coord,
        }
        //create newGame if lobby does not exist
        fetch('/chess/updateGame', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({lobby: lobby, board: board, turn: turn, move: move})
        })
        .then(response => response.json())
        .then(() => {
          
          if (turnContinue) {
            message = 'is still thinking...'
          } else if (move.defPiece === '') {
            message = `${move.atkPiece} ${translateCoords(move.atkFrom)} to ${translateCoords(move.defFrom)}.`
          } else {
            message = `${move.atkPiece} ${translateCoords(move.atkFrom)} to ${translateCoords(move.defFrom)}. White has captured Black's ${move.defPiece}!`
          }

          dispatch({
            type: 'server/SET_PLACED_PIECE',
            payload: {
              board: board,
              holdingPiece: false, 
              heldPiece: {
                coord: '',
                piece: '',
                pieceColor: '',
                tileColor: '',
              },
              turn: turn,
              move: move,
              lobby: lobby,
              message: {
                name: name,
                message: message
                }
            }
          })
        })
        .catch((err) => {
            console.log('Error posting new game lobby: ', err)
        });         
      } else {
        var turn = turnContinue ? 'black' : 'white'
        var move = {
          attacker: turnContinue ? '' : 'black',
          atkPiece: turnContinue ?  '' : state.heldPiece.piece,
          atkFrom: turnContinue ?  '' : state.heldPiece.coord,
          defPiece: turnContinue ? '' : defender.piece,
          defFrom: turnContinue ? '' : defender.coord
        }
        fetch('/chess/updateGame', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({lobby: lobby, board: board, turn: turn, move: move})
        })
        .then(response => response.json())
        .then(() => {
          
          if (turnContinue) {
            message = 'is still thinking...'
          } else if (move.defPiece === '') {
            message = `${move.atkPiece} ${translateCoords(move.atkFrom)} to ${translateCoords(move.defFrom)}.`
          } else {
            message = `${move.atkPiece} ${translateCoords(move.atkFrom)} to ${translateCoords(move.defFrom)}. Black has captured White's ${move.defPiece}!`
          }

          dispatch({
            type: 'server/SET_PLACED_PIECE',
            payload: {
              board: board,
              holdingPiece: false, 
              heldPiece: {
                coord: '',
                piece: '',
                pieceColor: '',
                tileColor: '',
              },
              turn: turn,
              move: move,
              lobby: lobby,
              message: {
                name: name,
                message: message
                }
            }
          })
        })
        .catch((err) => {
            console.log('Error posting new game lobby: ', err)
        });         
      }
    }
}