const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const chessSchema = require('../database/index.js').chessSchema
const ChessGame = require('../database/index.js').ChessGame

const app = express();

app.use(bodyParser.json());

app.use(express.static('./client/dist'));

app.post('/newGame', (req, res) => {
  console.log(req)
  var lobby = req.body.lobby;
  var turn = req.body.turn;
  var board = req.body.board
  console.log('Am I even receiving anything?:', req.body.lobby)
  
  ChessGame.create({lobby: lobby, board: board, turn: turn}, (err, doc) => {
    if (err) {
      console.log(err);
      console.log({error: 'lobby already created'});
      res.send(JSON.stringify({error: 'Sorry, lobby already created'}))
    } else {
      res.send(JSON.stringify(doc));
    }
  })
})
  
  app.post('/resumeGame', (req, res) => {
    var lobby = req.body.lobby;
    console.log('trying to resume:', req.body.lobby)
    
    ChessGame.find( {lobby: lobby}, (err, doc) => {
      if (err) {
        console.log(err);
        res.send(JSON.stringify({error: 'Sorry, save game does not exist'}))
      } else {
        console.log('Is a doc found? Here: ', doc)
        res.send(JSON.stringify(doc));
      }
    })
  })
  
  const port = process.env.PORT || 3000;
  
  app.listen(port, () => console.log(`The server is Running on port ${port}!`));
  
  /*
  
  app.post('/updateGame', (req, res) => {
    var lobby = req.body.lobby;
    var turn = req.body.turn;
    var board = req.body.board
    console.log('trying to update:', req.body.lobby)

  ChessGame.findOneAndUpdate( {lobby: lobby}, {board: board, turn: turn}, (err, doc) => {
    if (err) {
      console.log(err);
      console.log({error: 'Sorry could not update'});
      res.send(JSON.stringify({error: 'Sorry, could not save game update'}))
    } else {
      res.send(JSON.stringify(doc));
    }
  })
})
*/