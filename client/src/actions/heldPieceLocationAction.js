export function setHeldPieceLocation(e) {
    //get these values relative to screensize
    var left = (e.clientX - 20) / window.innerWidth;
    var top = (e.clientY - 40) / window.innerHeight;
    //throttle for mousemoves under 50ms
    if (window.timer === undefined || (new Date().getTime() - window.timer > 50)) {
        window.timer = new Date().getTime();
        return function (dispatch) {
            dispatch({   
                type: 'server/SET_HELD_PIECE_LOCATION',
                payload: {
                    left: left,
                    top: top
                }
            })
        }
    } else {
        return {
            type:'NO NO_ACTION'
        }
    }
}