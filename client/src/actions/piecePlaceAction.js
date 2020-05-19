export function setPlacedPiece(coord) {

    function onPiecePlace(coord) {
      var row = Number(coord[0]);
      var col = Number(coord[1]);
      var board = this.state.board;
      board[row][col].piece = this.state.heldPiece.piece;
      board[row][col].pieceColor = this.state.heldPiece.pieceColor;

      var lastRow = Number(this.state.heldPiece.coord[0])
      var lastCol = Number(this.state.heldPiece.coord[1])
      board[lastRow][lastCol].tileColor = this.state.heldPiece.tileColor;
      board[lastRow][lastCol].piece = '';
      board[lastRow][lastCol].pieceColor = ''

      if (this.state.turn === 'white') {
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

  return onPiecePlace(coord);

    // It does not change any props so this should not be needed
    // return {
    //     type: 'SET_CLICKED_TILE',
    //     payload: onTileClick
    // }

    //Will have to return in both parts of if statements switch out return...payload for this.setstates
}