import { socket } from '../store.js';

export default function leaveGame() {
    
    socket.emit('leaveGame')

    return {
        type: 'SET_LEAVE',
        payload: ''
    }
}