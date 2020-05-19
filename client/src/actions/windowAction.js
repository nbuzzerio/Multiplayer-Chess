export function setWindowHeight(size) {

    var windowSize = size.target.innerHeight;

    return {
        type: 'SET_WINDOW',
        payload: windowSize
    }
}