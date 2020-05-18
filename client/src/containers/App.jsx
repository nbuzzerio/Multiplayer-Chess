import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board.jsx';
import { setBoard } from '../actions/boardAction.js';
import { setWindowHeight } from '../actions/windowAction.js';


class App extends React.Component {

  componentDidMount() {
    console.log('the componentnentnt did mount')
    window.addEventListener('resize', this.props.setWindowHeight);
    window.addEventListener('resize', console.log('new height: ', window.innerHeight));

  }


  render () {
    return (
    <div>
      {console.log('props: ', this.props)}
      <Board board={this.props.board} holdingPiece={this.props.holdingPiece} heldPiece={this.props.heldPiece} turn={this.props.turn} lobby={this.props.lobby} windowHeight={this.props.windowHeight}/>
    </div>)

  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
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
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

    // this.state = {
    //   textField: '',
    //   lobby: '',

    //   holdingPiece: false,
    //   heldPiece: {
    //     coord: '',
    //     piece: '',
    //     pieceColor: ''
    //   },
    //   turn: 'white',
    //   lobbyTaken: false,
    //   lastTurn: [],

    // }