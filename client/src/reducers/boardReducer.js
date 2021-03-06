function createBoard() {
    class Tile {
        constructor(coord, piece, pieceColor, tileColor, validMove, check) {
        this.coord = coord,
        this.piece = piece,
        this.pieceColor = pieceColor,
        this.tileColor = tileColor,
        this.validMove = validMove,
        this.check = check
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

        //set validMove to false (will determine if boarder is highlighted)
        board[i][o].validMove = false;
        board[i][o].check = false;
        board[i][o].piece = '';
        board[i][o].pieceColor = '';

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

        //set enPassant to false for rows 3 and 4
        if (i === 3 || i === 4) {
            board[i][o].enPassant = false;
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
            board[i][o].piece = 'Q'
            } else if (o === 4) {
            board[i][o].piece = 'K'
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
            board[i][o].piece = 'Q'
            } else if (o === 4) {
            board[i][o].piece = 'K'
            }
        }
        }
    }
    return board;
}
const newBoard = createBoard();

const boardReducer = (state = {
    board: newBoard,
    lobby: '',
    holdingPiece: false,
    heldPiece: {
    coord: '',
    piece: '',
    pieceURL: 'Empty',
    pieceColor: ''
    },
    validMoves: [],
    move:{
        attacker: '',
        atkPiece: '',
        atkFrom: '',
        defPiece: '',
        defFrom: ''
    },
    heldPieceLocation: {
        boardXratio: -1,
        boardYratio: -1,
        boardLocation: {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
            x: 0,
            y: 0
        }
    },
    turn: 'white',
    lobbyTaken: false,
    lobbyExists: true,
    messages: [{
        name: 'Chess',
        message: 'Welcome to the Game!'
    }],
    chatTextField: '',
}, action) => {
    switch (action.type) {
        case 'SET_BOARD':
            state = {
                ...state,
                board: action.payload.board,
                lobby: action.payload.lobby,
                turn: action.payload.turn,
                lobbyTaken: false,
                lobbyExists: true
            };
            break;
        case 'SET_LIFTED_PIECE':
            state = {
                ...state,
                board: action.payload.board,
                holdingPiece: action.payload.holdingPiece, 
                heldPiece: action.payload.heldPiece,
                heldPieceLocation: action.payload.heldPieceLocation
            };
            break;
        case 'SET_HELD_PIECE_LOCATION':
            state = {
                ...state,
                heldPieceLocation: action.payload
            };
            break;
        case 'SET_PLACED_PIECE':
                var msgs = state.messages.slice()
            if (message) {
                msgs.push({
                    name: action.payload.message.name,
                    message: action.payload.message.message
                 })
            }
            state = {
                ...state,
                board: action.payload.board,
                holdingPiece: action.payload.holdingPiece, 
                heldPiece: action.payload.heldPiece,
                turn: action.payload.turn,
                move: action.payload.move,
                messages: msgs,
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
        case 'SET_RESUME_GAME':
            state = {
                ...state,
                board: action.payload.board,
                lobby: action.payload.lobby,
                turn: action.payload.turn
            };
            break;
        case "SET_LEAVE":
            state = {
                ...state,
                lobby: ''
            }
            break;
        case "SET_MESSAGE":
        var msgs = state.messages.slice()
        msgs.push({
            name: action.payload.message.name,
            message: action.payload.message.message
        })

            state = {
                ...state,
                messages: msgs,
                chatTextField: ''
            }
            break;
        case 'SET_CHAT_TEXTFIELD':
            state = {
                ...state,
                chatTextField: action.payload
            };
            break;
        case "SET_MESSAGE":
            var msgs = state.messages.slice()
            msgs.push({
                name: action.payload.message.name,
                message: action.payload.message.message
            })

                state = {
                    ...state,
                    messages: msgs,
                    chatTextField: ''
                }
                break;
        case 'SET_CHAT_TEXTFIELD':
            state = {
                ...state,
                chatTextField: action.payload
            };
            break;
        case 'SET_VALID_MOVES':
            state = {
                ...state,
                board: action.payload.board,
                validMoves: action.payload.validMoves
            };
            break;
    }
    return state;
};

export default boardReducer;