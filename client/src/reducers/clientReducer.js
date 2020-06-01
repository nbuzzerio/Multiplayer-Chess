const clientReducer = (state = {
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    boardDimensions: {
        bottom: 0,
        height: window.innerHeight*.64,
        left: (window.innerWidth - window.innerHeight*.64)/2,
        right: 0,
        top: 200, //not dynamic
        width: window.innerHeight*.64,
        x: 0,
        y: 0
    },
    textField: '',
    name: ''
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
            case 'SET_TEXTFIELD':
                state = {
                    ...state,
                    textField: action.payload
                };
                break;
            case "SET_NAME":
                state = {
                    ...state,
                    name: action.payload,
                    textField: ''
                }
                break;
    }
    return state;
};

export default clientReducer