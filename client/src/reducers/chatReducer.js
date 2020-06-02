const chatReducer = (state = {
    messages: [{
        name: 'Chess',
        message: 'Welcome to the Game!'
    }],
    chatTextField: '',
}, action) => {
    switch (action.type) {
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
    }
    return state;
};

export default chatReducer