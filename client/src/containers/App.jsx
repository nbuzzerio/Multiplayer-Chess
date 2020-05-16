import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board.jsx';
import { setBoard } from '../actions/boardAction.js';

console.log(setBoard(), 'the function is there')

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
    // this.handleResize = this.handleResize.bind(this)
    this.props.setBoard()
  }

  

  handleResize(size) {
    console.log('size: ', size)
    this.setState({
      windowHeight: size.target.window.innerHeight
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }


  render () {
    return (
    <div>
      {console.log('board: ', this.props.board, 'props: ', this.props)}
      <Board board={this.props.board} holdingPiece={this.props.holdingPiece} heldPiece={this.props.heldPiece} turn={this.props.turn} lobby={this.props.lobby} windowHeight={this.props.windowHeight}/>
    </div>)

  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      setBoard: () => { //more like this
        dispatch(setBoard())
      },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

