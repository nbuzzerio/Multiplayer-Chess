export function setWindowHeight(size) {

    var windowSize = size.target.innerHeight - 155;

    return {
        type: 'SET_WINDOW',
        payload: windowSize
    }
}