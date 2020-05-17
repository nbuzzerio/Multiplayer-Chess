import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board.jsx';
import { setBoard } from '../actions/boardAction.js';
import { setWindowHeight } from '../actions/windowAction.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   textField: '',
    //   lobby: '',
    //   board: this.createBoard(),
    //   holdingPiece: false,
    //   heldPiece: {
    //     coord: '',
    //     piece: '',
    //     pieceColor: ''
    //   },
    //   turn: 'white',
    //   lobbyTaken: false,
    //   lastTurn: [],
    //   windowHeight: window.innerHeight
    // }
   
  }

  

  // handleResize(size) {
  //   console.log('size: ', size)
  //   this.setState({
  //     windowHeight: size.target.window.innerHeight
  //   })
  // }

  componentDidMount() {
    console.log('this: ', this);
    window.addEventListener("resize", this.props.setWindowHeight(window.innerWidth));
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

