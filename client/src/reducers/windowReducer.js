const windowReducer = (state = window.innerHeight, action) => {
    switch (action.type) {
        case "SET_WINDOW":
            state = action.payload;
            break;
    }
    return state;
};

export default windowReducer