import React from 'react';
import styled from 'styled-components';
import store from '../store.js'
import setNewTextField from '../actions/textFieldAction.js';
import setName from '../actions/playerAction.js';

const StyledButton = styled.button`
  position: relative;
  top: ${props => props.windowHeight*.184}px;
  left: ${props => props.windowWidth*.25}px;
  height: ${props => props.windowHeight*.107}px;
  width: ${props => props.windowWidth*.15}px;
`;
const StyledInput = styled.input`
  position: relative;
  top: ${props => props.windowHeight*.2}px;
  left: ${props => props.windowWidth*.25}px;
  height: ${props => props.windowHeight*.1}px;
  width: ${props => props.windowWidth*.35}px;
  font-size: ${props => props.windowHeight*.06}px;
`;
const StyledWelcome = styled.div`
  top: ${props => props.windowHeight*.2}px;
  font-size: ${props => props.windowHeight*.08}px;
  text-align: center;
`

function LandingPage () {
    
    var props = store.getState().clientProps;

    return (
      <div>
        <StyledWelcome windowHeight={props.windowHeight}>Welcome! Please enter a name to get started</StyledWelcome>
        <StyledButton windowHeight={props.windowHeight} windowWidth={props.windowWidth} onClick={() => {store.dispatch(setName(props.textField))}}>
          Enter Name
        </StyledButton>
        <StyledInput 
          type='text' name='Enter Name' placeholder='Player Name' value={props.textField} windowHeight={props.windowHeight} windowWidth={props.windowWidth} onChange={(e) => { store.dispatch(setNewTextField(e))}}>
        </StyledInput>
      </div>      
    )
}

export default LandingPage;