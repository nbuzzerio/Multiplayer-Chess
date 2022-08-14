import React from "react";
import Tile from "./Tile.jsx";
import styled from "styled-components";
import store from "../store.js";
import { setClickedTile } from "../actions/clickTileAction.js";
import { setValidMoves } from "../actions/setValidMoves.js";

const StyledBoard = styled.div`
  border: ${(props) => props.windowWidth * 0.04}px solid tan;
  border-radius: 3%;
  box-shadow: 17px -6px 85px 11px #000;
  height: ${(props) => props.windowWidth * 0.64}px;
  width: ${(props) => props.windowWidth * 0.64}px;
  margin: auto;
`;

const StyledSquares = styled.div`
  display: grid;
  grid-template-columns: repeat(8, ${(props) => props.windowWidth * 0.08}px);
  grid-template-rows: repeat(8, ${(props) => props.windowWidth * 0.08}px);
`;

function Board() {
  const props = store.getState();

  const rows = props.boardProps.board;

  //going through matrix rows then through each row and grabbing tiles
  var tilesList = rows.map((row, rowIndex) => {
    return row.map((tile, colIndex) => {
      return (
        <div
          className="tile"
          onClick={() => {
            setValidMoves(tile);
            store.dispatch(setClickedTile(tile));
          }}
          key={rowIndex + "" + colIndex}
        >
          <Tile
            tile={tile}
            holdingPiece={props.boardProps.holdingPiece}
            heldPiece={props.boardProps.heldPiece}
            turn={props.boardProps.turn}
            lobby={props.boardProps.lobby}
            key={rowIndex + "" + colIndex}
            windowWidth={props.clientProps.windowWidth}
            onTileClick={props.onTileClick}
          />
        </div>
      );
    });
  });

  return (
    <StyledBoard windowWidth={props.clientProps.windowWidth}>
      <div id="board">
        <StyledSquares windowWidth={props.clientProps.windowWidth}>
          {tilesList}
        </StyledSquares>
      </div>
    </StyledBoard>
  );
}

export default Board;
