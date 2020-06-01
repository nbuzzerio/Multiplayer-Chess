import React from 'react';
import { connect } from 'react-redux';

import { setBoard } from '../actions/boardAction.js';
import { setWindowHeight } from '../actions/windowAction.js';
import { setBoardDimensions } from '../actions/boardDimensionsAction.js';
import { setClickedTile } from '../actions/clickTileAction.js';
import { setLiftedPiece } from '../actions/liftPieceAction.js';
import { setHeldPieceLocation } from '../actions/heldPieceLocationAction.js';
import { setPlacedPiece } from '../actions/piecePlaceAction.js';
import { setNewOrContinueBoard } from '../actions/gameStateAction.js';
import { setNewTextField } from '../actions/textFieldAction.js';

import LandingPage from '../components/LandingPage.jsx';
import NamedPlayer from '../components/NamedPlayer.jsx';
import GameSelected from '../components/GameSelect.jsx';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.props.setWindowHeight);
    window.addEventListener('resize', this.props.setBoardDimensions);
  }

  render () {
    var page;
      if (this.props.clientProps.name === '') {
        page = <LandingPage />
      } else {
        if (this.props.boardProps.lobby === '') {
          page = <NamedPlayer />
        } else {
          page = <GameSelected />
        }
      }
    return (
      <div>
        {page}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    boardProps: state.boardProps,
    clientProps: state.clientProps
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      setName: (name) => {
        dispatch(setName(name))
      },
      setBoard: (lobby) => {
        dispatch(setBoard(lobby))
      },
      setWindowHeight: (size) => {
        dispatch(setWindowHeight(size))
      },
      setBoardDimensions: () => {
        dispatch(setBoardDimensions())
      },
      onTileClick: (tileProps) => {
        dispatch(setClickedTile(tileProps))
      },
      onLiftPiece: (coord, piece, pieceColor, tileColor, lobby, location) => {
        dispatch(setLiftedPiece(coord, piece, pieceColor, tileColor, lobby, location))
      },
      setHeldPieceLocation: (location) => {
        dispatch(setHeldPieceLocation(location))
      },
      onPiecePlace: (coord) => {
        dispatch(setPlacedPiece(coord))
      },
      onGameButtonClick: (textField, newGame) => {
        dispatch(setNewOrContinueBoard(textField, newGame))
      },
      onTextFieldChange: (e) => {
        dispatch(setNewTextField(e))
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)