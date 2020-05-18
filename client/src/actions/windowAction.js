export function setWindowHeight(size) {
    console.log("WE ARE HERE WE ARE HERE!!!:::::::::::::", size)

    var windowSize = size.target.innerHeight;
    console.log(windowSize, 'jttirjtiowerjtw window sizeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    return {
        type: 'SET_WINDOW',
        payload: windowSize
    }
}