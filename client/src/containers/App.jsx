import React from "react";
import { connect } from "react-redux";

import { setwindowWidth } from "../actions/windowAction.js";
import { setBoardDimensions } from "../actions/boardDimensionsAction.js";

import LandingPage from "../components/LandingPage.jsx";
import NamedPlayer from "../components/NamedPlayer.jsx";
import GameSelected from "../components/GameSelect.jsx";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("resize", this.props.setwindowWidth);
    window.addEventListener("resize", this.props.setBoardDimensions);
  }

  render() {
    var page;
    if (this.props.clientProps.name === "") {
      page = <LandingPage />;
    } else {
      if (this.props.boardProps.lobby === "") {
        page = <NamedPlayer />;
      } else {
        page = <GameSelected />;
      }
    }
    return <div>{page}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    boardProps: state.boardProps,
    clientProps: state.clientProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setwindowWidth: (size) => {
      dispatch(setwindowWidth(size));
    },
    setBoardDimensions: () => {
      dispatch(setBoardDimensions());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
