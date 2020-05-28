const clientReducer = (state = {
    windowHeight: window.innerHeight
}, action) => {
    switch (action.type) {
        case "SET_WINDOW":
            state = {
                ...state,
                windowHeight: action.payload
            }
            break;
    }
    return state;
};

export default clientReducer