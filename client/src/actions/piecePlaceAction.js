export default function setPlacedPiece(coord, state) {
    function onPiecePlace(coord) {
      var row = Number(coord[0]);
      var col = Number(coord[1]);
      var board = state.board;
      //To keep track of captured pieces we'll have to log these spaces current values first
      board[row][col].piece = state.heldPiece.piece;
      board[row][col].pieceColor = state.heldPiece.pieceColor;
      var lastRow = Number(state.heldPiece.coord[0])
      var lastCol = Number(state.heldPiece.coord[1])
      var turnContinue = false;
      //check if Piece is placed back where it was meaning the turn continues
      if (lastRow === row && lastCol === col) {
        turnContinue = true;
        board[lastRow][lastCol].tileColor = state.heldPiece.tileColor;
      } else {
        board[lastRow][lastCol].tileColor = state.heldPiece.tileColor;
        board[lastRow][lastCol].piece = '';
        board[lastRow][lastCol].pieceColor = ''
      }
      if (state.turn === 'white') {
        // this.setState({lastTurn: JSON.stringify({board: this.state.board, turn: this.state.turn})})
        var turn = turnContinue ? 'white' : 'black'
        return {
          type: 'SET_PLACED_PIECE',
          payload: {board: board,
            holdingPiece: false, 
            heldPiece: {
              coord: '',
              piece: '',
              pieceColor: '',
              tileColor: '',
            },
            turn: turn
          }
        };
      } else {
        // this.setState({lastTurn: JSON.stringify({board: this.state.board, turn: this.state.turn})})
        var turn = turnContinue ? 'black' : 'white'
        return {
          type: 'SET_PLACED_PIECE',
          payload: {board: board,
          holdingPiece: false, 
          heldPiece: {
            coord: '',
            piece: '',
            pieceColor: '',
            tileColor: ''
          },
          turn: turn
          }
        };
      }
  }

  return onPiecePlace(coord, state);
}