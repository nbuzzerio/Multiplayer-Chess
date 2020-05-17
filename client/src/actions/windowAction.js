export function setWindowHeight(size) {
    console.log("WE ARE HERE WE ARE HERE!!!:::::::::::::", size)
    
    function handleResize(size) {
        var windowHeight = size
        return windowHeight;
    }

    var windowSize = handleResize(size);
    console.log(windowSize, 'jttirjtiowerjtw window sizeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    return {
        type: 'SET_WINDOW',
        payload: windowSize
    }
}