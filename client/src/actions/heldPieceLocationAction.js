export function setHeldPieceLocation(e) {
    //get these values relative to screensize
    var left = (e.clientX - 20) / window.innerWidth;
    var top = (e.clientY - 40) / window.innerHeight;
    console.log('hey')

    return {
        type: 'server/SET_HELD_PIECE_LOCATION',
        payload: {
            left: left,
            top: top
        }
    }
}