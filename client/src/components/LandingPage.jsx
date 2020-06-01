import React from 'react';
import styled from 'styled-components';
import store from '../store.js'
import setNewTextField from '../actions/textFieldAction.js';
import setName from '../actions/playerAction.js';


function LandingPage () {
    
    var props = store.getState().clientProps;

    return (
      <div>
          <button onClick={() => {store.dispatch(setName(props.textField))}}>Enter Name</button> 
          <input type='text' name='Enter Name' placeholder='Player Name' value={props.textField} onChange={(e) => { store.dispatch(setNewTextField(e))}}></input>
      </div>      
    )
}

export default LandingPage;