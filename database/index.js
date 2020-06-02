const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, (err) => {
  if (err) { 
    console.log('There was an error connecting to the database:', err);
  };
  console.log('Database connection successful.')
});

var chessSchema = new mongoose.Schema({
    lobby: {type: String,
    unique: true},
    board: Array,
    turn: String,
    move: Object
});

var ChessGame = mongoose.model('ChessGame', chessSchema);

module.exports.chessSchema = chessSchema;
module.exports.ChessGame = ChessGame;