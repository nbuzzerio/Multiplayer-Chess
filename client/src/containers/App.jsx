import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board.jsx';
import { setBoard } from '../actions/boardAction.js';
import { setWindowHeight } from '../actions/windowAction.js';
import { setClickedTile } from '../actions/clickTileAction.js';
import { setLiftedPiece } from '../actions/liftPieceAction.js';
import { setPlacedPiece } from '../actions/piecePlaceAction.js';
import { setNewOrContinueBoard } from '../actions/gameStateAction.js';
import { setNewTextField } from '../actions/textFieldAction.js';


class App extends React.Component {

  componentDidMount() {
    window.addEventListener('resize', this.props.setWindowHeight);
    //add event listener for heldpiece to follow mouse
    const held = document.getElementById('heldPiece');
    //style the element
    held.style.boxSizing = 'boarder-box';
    held.style.position = 'absolute';
    held.style.pointerEvents = 'none';
      window.addEventListener('mousemove', e => {
        var left = e.clientX - 20;
        var top = e.clientY - 40
        held.style.left = `${left}px`;
        held.style.top = `${top}px`;
        
      });
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

      <Board board={this.props.boardProps.board} holdingPiece={this.props.boardProps.holdingPiece} heldPiece={this.props.boardProps.heldPiece} turn={this.props.boardProps.turn} lobby={this.props.boardProps.lobby} windowHeight={this.props.windowHeight} onTileClick={this.props.onTileClick}/>
      <div id='heldPiece'></div>
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
      setBoard: (lobby) => { //more like this
        dispatch(setBoard(lobby))
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
      onGameButtonClick: (textField, newGame) => {
        dispatch(setNewOrContinueBoard(textField, newGame))
      },
      onTextFieldChange: (e) => {
        dispatch(setNewTextField(e))
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)