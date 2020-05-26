function createBoard() {
    class Tile {
        constructor(coord, piece, pieceColor, tileColor) {
        this.coord = coord,
        this.piece = piece,
        this.pieceColor = pieceColor,
        this.tileColor = tileColor
        }
    };

    class Row {
        constructor(row) {
        this.row = Array(8);
        }
    }
    //row Extractor
    function row() {
        const row = new Row;
        return row.row
    }

    var board = Array(8);

    for (var i = 0; i < board.length; i++) {
        board[i] = row().fill(null, 0, 8);
        for (var o = 0; o < board.length; o++) {
        board[i][o] = new Tile();

        //set coord equal to the matrix coordinates
        board[i][o].coord = i + '' + o;

        //set tile color
        if ((i%2 === 0 &&  o%2 !== 0) || (i%2 !== 0 &&  o%2 === 0)) {
            board[i][o].tileColor = '#8B4513'; //brown
        } else if ((i%2 !== 0 &&  o%2 !== 0) || (i%2 === 0 && o%2 === 0)) {
            board[i][o].tileColor = 'tan';
        }

        //set initial pawns and pawn teams
        if (i === 1) {
            board[i][o].piece = 'P'
            board[i][o].pieceColor = 'black'
        }
        if (i === 6) {
            board[i][o].piece = 'P'
            board[i][o].pieceColor = 'white'
        }

        //set major pieces and teams
        if (i === 0) {
            board[i][o].pieceColor = 'black'
            if (o === 0 || o === 7) {
            board[i][o].piece = 'R'
            } else if (o === 1 || o === 6) {
            board[i][o].piece = 'H'
            } else if (o === 2 || o === 5) {
            board[i][o].piece = 'B'
            } else if (o === 3) {
            board[i][o].piece = 'K'
            } else if (o === 4) {
            board[i][o].piece = 'Q'
            }
        }

        if (i === 7) {
            board[i][o].pieceColor = 'white'
            if (o === 0 || o === 7) {
            board[i][o].piece = 'R'
            } else if (o === 1 || o === 6) {
            board[i][o].piece = 'H'
            } else if (o === 2 || o === 5) {
            board[i][o].piece = 'B'
            } else if (o === 3) {
            board[i][o].piece = 'K'
            } else if (o === 4) {
            board[i][o].piece = 'Q'
            }
        }
        }
    }
    return board;
}
const newBoard = createBoard();

const boardReducer = (state = {
    board: newBoard,
    textField: '',
    lobby: '',
    holdingPiece: false,
    heldPiece: {
    coord: '',
    piece: '',
    pieceColor: ''
    },
    turn: 'white',
    lobbyTaken: false,
    lobbyExists: true,
    lastTurn: [] //not yet implemented
}, action) => {
    switch (action.type) {
        case 'SET_BOARD':
            state = {
                ...state,
                board: action.payload.board,
                lobby: action.payload.lobby,
                lobbyTaken: false,
                lobbyExists: true
            };
            break;
        case 'SET_LIFTED_PIECE':
            state = {
                ...state,
                board: action.payload.board,
                holdingPiece: action.payload.holdingPiece, 
                heldPiece: action.payload.heldPiece
            };
            break;
        case 'SET_PLACED_PIECE':
            state = {
                ...state,
                board: action.payload.board,
                holdingPiece: action.payload.holdingPiece, 
                heldPiece: action.payload.heldPiece,
                turn: action.payload.turn
            };
            break;
        case 'SET_LOBBY_TAKEN':
            state = {
                ...state,
                lobbyTaken: action.payload,
                lobbyExists: true
            };
            break;
        case 'SET_LOBBY_EXISTS':
            state = {
                ...state,
                lobbyExists: action.payload
            };
            break;
        case 'SET_TEXTFIELD':
            state = {
                ...state,
                textField: action.payload
            };
            break;
        case 'SET_RESUME_GAME':
            state = {
                ...state,
                board: action.payload.board,
                lobby: action.payload.lobby,
                turn: action.payload.turn
            };
            break;
    }
    return state;
};

export default boardReducer;