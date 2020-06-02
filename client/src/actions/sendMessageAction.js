export default function sendMessage(name, message, lobby) {

    //Note: add check to avoid script injections
    if (message !== '') {
        return {
            type: 'server/SET_MESSAGE',
            payload: {
                message: {
                name: name,
                message: message,
                },
                lobby: lobby
            }
        }
    } else {
        return {
            type: 'NO_ACTION'
        }
    }
}