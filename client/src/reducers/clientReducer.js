const clientReducer = (state = {
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    boardDimensions: {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
    }
}, action) => {
    switch (action.type) {
        case "SET_WINDOW":
            state = {
                ...state,
                windowHeight: action.payload.height,
                windowWidth: action.payload.width,
            }
            break;
        case "SET_BOARD_DIMENSIONS":
            state = {
                ...state,
                boardDimensions: action.payload
            }
            break;
    }
    return state;
};

export default clientReducer