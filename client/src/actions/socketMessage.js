export default function socketMessage(name, message) {

    //Note: add check to avoid script injections
    if (message !== '') {
        return {
            type: 'SET_MESSAGE',
            payload: {
                message: {
                name: name,
                message: message,
                }
            }
        }
    } else {
        return {
            type: 'NO_ACTION'
        }
    }
}