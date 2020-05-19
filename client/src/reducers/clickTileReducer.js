const clickTileReducer = (state = window.innerHeight, action) => {
    switch (action.type) {
        case "SET_CLICKED_TILE":
            state = action.payload;
            break;
    }
    return state;
};

export default clickTileReducer