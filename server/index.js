const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const chessSchema = require('../database/index.js').chessSchema
const ChessGame = require('../database/index.js').ChessGame

const app = express();
const http = require('http').createServer(app);
//initilize a new instance of socket-io and pass in the http server
const io = require('socket.io')(http);
app.use(bodyParser.json());

app.use(express.static('./client/dist'));

//creates listener for user connecting and disconnection
io.on('connection', (socket) => {
  console.log('Socket connected: ', socket.id);
  // io.emit('newConnection', socket.id + 'has connected to the game.')
  socket.on('disconnecting', () => {
    console.log('user disconnected: ', Object.keys(socket.rooms));
    let lobby;
    Object.keys(socket.rooms).forEach((s) => {
      console.log(s.slice(0, 5))
      if (s.slice(0, 5) === 'Room-') {
        lobby = s
      }
    })

    io.to(lobby).emit('newDisconnection', socket.name + ' has disconnected from the game.')
  });
  socket.on('action', (action) => {
    console.log("This is the state: ", action)
    const lobby = action.payload.lobby;
    io.to(`Room-${lobby}`).emit('action', {
      type: action.type.slice(7),
      payload: action.payload
    });
  });
  socket.on('joinRoom', (lobby, name) => {
    if (!socket.name) {
      socket.name = name || 'Anonymous';
    }

    Object.keys(socket.rooms).forEach((s) => {
      console.log(s.slice(0, 5))
      if (s.slice(0, 5) === 'Room-') {
        socket.leave(s)
        io.to(s).emit('newDisconnection', `${socket.name} has left the room ${s}.`)
      }
    })


    socket.join(`Room-${lobby}`, () => {
      console.log('Whats in here:', socket.id);
      io.to(`Room-${lobby}`).emit(`Room-${lobby}`, `${socket.name} has joined the room.`)
    });
  });

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
  });
});
  
const port = process.env.PORT || 3000;

http.listen(port, () => console.log(`The server is Running on port ${port}!`));
