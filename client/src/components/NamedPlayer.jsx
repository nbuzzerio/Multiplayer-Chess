import React from 'react';
import styled from 'styled-components';
import store from '../store.js'
import setNewTextField from '../actions/textFieldAction.js';
import setNewOrContinueBoard from '../actions/gameStateAction.js';


function NamedPlayer () {
    var props = store.getState();
  
    return (
        <div>
    
          <h1>{ props.boardProps.lobbyTaken ? `Sorry ${props.clientProps.name} Lobby taken! Pick a new lobby to play or click continue`: (props.boardProps.lobby !== '' ? 'Chess Game in Room: ' + props.boardProps.lobby : `Welcome ${props.clientProps.name}! Please enter a room to play a Chess Game`)}</h1>
          <hr></hr>
          <br></br>
          <button onClick={() => {store.dispatch(setNewOrContinueBoard(props.clientProps.textField, props.clientProps.name, true))}}>Create a New Game</button>
          <button onClick={() => {store.dispatch(setNewOrContinueBoard(props.clientProps.textField, props.clientProps.name, false))}}>Continue Game</button> 
          <input type='text' name='lobby' placeholder='Room Name' value={props.clientProps.textField} onChange={(e) => {store.dispatch(setNewTextField(e))}}></input>
          <br></br>
          <br></br>
          <hr></hr>
          <h1>{props.boardProps.lobbyExists ? '' : 'Lobby does not exist please create a new game or resume a current lobby.'}</h1>
          <br></br>
     
        </div>      
    )
}

export default NamedPlayer;