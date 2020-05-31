import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board.jsx';
import { setBoard } from '../actions/boardAction.js';
import { setWindowHeight } from '../actions/windowAction.js';
import { setBoardDimensions } from '../actions/boardDimensionsAction.js';
import { setClickedTile } from '../actions/clickTileAction.js';
import { setLiftedPiece } from '../actions/liftPieceAction.js';
import { setHeldPieceLocation } from '../actions/heldPieceLocationAction.js';
import { setPlacedPiece } from '../actions/piecePlaceAction.js';
import { setNewOrContinueBoard } from '../actions/gameStateAction.js';
import { setNewTextField } from '../actions/textFieldAction.js';

class App extends React.Component {

  componentDidMount() {
    console.log(this.props)

    window.addEventListener('resize', this.props.setWindowHeight);
    window.addEventListener('resize', this.props.setBoardDimensions);
    //set it initially as well
    this.props.setBoardDimensions();

    console.log('after', this.props)


  }

  render () {
    return (
    <div>
      <h1>{ this.props.boardProps.lobbyTaken ? 'Lobby taken! Pick a new lobby to play a Chess Game': (this.props.boardProps.lobby !== '' ? 'Chess Game in Room: ' + this.props.boardProps.lobby : 'Chess Game')}</h1>
      <hr></hr>
      <br></br>
      <button onClick={() => {this.props.onGameButtonClick(this.props.boardProps.textField, true)}}>Create a New Game</button>
      <button onClick={() => {this.props.onGameButtonClick(this.props.boardProps.textField, false)}}>Continue Game</button> 
    {/*I should abstract the textfield away from the board reducer later*/}
      <input type='text' name='lobby' placeholder='Room Name' value={this.props.boardProps.textField} onChange={(e) => {this.props.onTextFieldChange(e)}}></input>
      <button style={{float: 'right'}} onClick={this.undo}>Undo Move</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h1>{this.props.boardProps.lobbyExists ? '' : 'Lobby does not exist please create a new game or resume a current lobby.'}</h1>
      <br></br>
      <Board board={this.props.boardProps.board} holdingPiece={this.props.boardProps.holdingPiece} heldPiece={this.props.boardProps.heldPiece} turn={this.props.boardProps.turn} lobby={this.props.boardProps.lobby} windowHeight={this.props.clientProps.windowHeight} onTileClick={this.props.onTileClick} setHeldPieceLocation={this.props.setHeldPieceLocation}/>
    <div id='heldPiece' style={{fontSize: `${window.innerHeight*.07}px`, color: this.props.boardProps.heldPiece.pieceColor, 
    
    left: `${this.props.boardProps.heldPieceLocation.boardXratio * 
      this.props.clientProps.boardDimensions.width + this.props.clientProps.boardDimensions.left
    }px`, 
    
    top: `${this.props.boardProps.heldPieceLocation.boardYratio * 
      this.props.clientProps.boardDimensions.height + this.props.clientProps.boardDimensions.top
    }px`,
    
    boxSizing: 'boarder-box', position: 'absolute', pointerEvents: 'none'}}>{this.props.boardProps.heldPiece.piece}</div> 
    </div>)
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
      setBoard: (lobby) => { //more like this
        dispatch(setBoard(lobby))
      },
      setWindowHeight: (size) => {
        dispatch(setWindowHeight(size))
      },
      setBoardDimensions: () => {
        dispatch(setBoardDimensions())
      },
      onTileClick: (tileProps, pieceLocation) => {
        dispatch(setClickedTile(tileProps, pieceLocation))
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