export function setClickedTile(size) {

    function onTileClick() {
        if (this.props.lobby !== '') {
          var coord = this.props.tile.coord;
          var piece = this.props.tile.piece;
          var pieceColor = this.props.tile.pieceColor;
          var tileColor = this.props.tile.tileColor;
    
          if (!this.props.holdingPiece && this.props.tile.piece && this.props.tile.pieceColor === this.props.turn) {
            this.props.onLiftPiece(coord, piece, pieceColor, tileColor);
          }
          if (this.props.holdingPiece && (this.props.tile.pieceColor !== this.props.heldPiece.pieceColor)) {
            this.props.onPiecePlace(coord);
          }
        }
    }

    // It does not change any props so this should not be needed
    // return {
    //     type: 'SET_CLICKED_TILE',
    //     payload: onTileClick
    // }
}


// onLiftPiece(coord, piece, pieceColor, tileColor) {
//     var row = Number(coord[0]);
//     var col = Number(coord[1]);
//     var board = this.state.board;
//     board[row][col].tileColor = 'green';

//     this.setState({board: board,
//       holdingPiece: true, 
//       heldPiece: {
//         coord: coord,
//         piece: piece,
//         pieceColor: pieceColor,
//         tileColor: tileColor
//       }
//     });
//   }

//   onPiecePlace(coord) {
//     var row = Number(coord[0]);
//     var col = Number(coord[1]);
//     var board = this.state.board;
//     board[row][col].piece = this.state.heldPiece.piece;
//     board[row][col].pieceColor = this.state.heldPiece.pieceColor;

//     var lastRow = Number(this.state.heldPiece.coord[0])
//     var lastCol = Number(this.state.heldPiece.coord[1])
//     board[lastRow][lastCol].tileColor = this.state.heldPiece.tileColor;
//     board[lastRow][lastCol].piece = '';
//     board[lastRow][lastCol].pieceColor = ''

//     if (this.state.turn === 'white') {
//       this.setState({lastTurn: JSON.stringify({board: this.state.board, turn: this.state.turn})})
//       this.setState({board: board,
//         holdingPiece: false, 
//         heldPiece: {
//           coord: '',
//           piece: '',
//           pieceColor: '',
//           tileColor: '',
//         },
//         turn: 'black'
//       }, this.boardSaveUpdate);
//     } else {
//       this.setState({lastTurn: JSON.stringify({board: this.state.board, turn: this.state.turn})})
//       this.setState({board: board,
//         holdingPiece: false, 
//         heldPiece: {
//           coord: '',
//           piece: '',
//           pieceColor: '',
//           tileColor: ''
//         },
//         turn: 'white'
//       }, this.boardSaveUpdate);
//     }
//   }