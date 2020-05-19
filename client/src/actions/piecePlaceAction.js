export default function setPlacedPiece(coord, state) {
    function onPiecePlace(coord) {
      var row = Number(coord[0]);
      var col = Number(coord[1]);
      var board = state.board;
      board[row][col].piece = state.heldPiece.piece;
      board[row][col].pieceColor = state.heldPiece.pieceColor;

      var lastRow = Number(state.heldPiece.coord[0])
      var lastCol = Number(state.heldPiece.coord[1])
      board[lastRow][lastCol].tileColor = state.heldPiece.tileColor;
      board[lastRow][lastCol].piece = '';
      board[lastRow][lastCol].pieceColor = ''

      if (state.turn === 'white') {
        // this.setState({lastTurn: JSON.stringify({board: this.state.board, turn: this.state.turn})})
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
            turn: 'black'
          }
        };
      } else {
        // this.setState({lastTurn: JSON.stringify({board: this.state.board, turn: this.state.turn})})
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
          turn: 'white'
          }
        };
      }
  }

  return onPiecePlace(coord, state);
}