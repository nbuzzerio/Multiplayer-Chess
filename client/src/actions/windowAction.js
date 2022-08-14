export function setwindowWidth(size) {
  var height = size.target.innerHeight;
  var width = size.target.innerWidth;

  return {
    type: "SET_WINDOW",
    payload: {
      height: height,
      width: width,
    },
  };
}
