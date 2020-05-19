import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board.jsx';
import { setBoard } from '../actions/boardAction.js';
import { setWindowHeight } from '../actions/windowAction.js';
import { setClickedTile } from '../actions/clickTileAction.js';
import { setLiftedPiece } from '../actions/liftPieceAction.js';
import { setPlacedPiece } from '../actions/piecePlaceAction.js';


class App extends React.Component {

  componentDidMount() {
    window.addEventListener('resize', this.props.setWindowHeight);
  }


  render () {
    return (
    <div>
      <Board board={this.props.boardProps.board} holdingPiece={this.props.boardProps.holdingPiece} heldPiece={this.props.boardProps.heldPiece} turn={this.props.boardProps.turn} lobby={this.props.boardProps.lobby} windowHeight={this.props.windowHeight} onTileClick={this.props.onTileClick}/>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    boardProps: state.boardProps,
    windowHeight: state.windowHeight
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      setBoard: () => { //more like this
        dispatch(setBoard())
      },
      setWindowHeight: (size) => {
        dispatch(setWindowHeight(size))
      },
      onTileClick: (tileProps) => {
        dispatch(setClickedTile(tileProps))
      },
      onLiftPiece: (coord, piece, pieceColor, tileColor) => {
        dispatch(setLiftedPiece(coord, piece, pieceColor, tileColor))
      },
      onPiecePlace: (coord) => {
        dispatch(setPlacedPiece(coord))
      },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)