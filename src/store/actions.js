const ADD_COORDS = "ADD_COORDS";
const SET_COORDS = "SET_COORDS"

const addCoordsAction = payload => ({
  type: ADD_COORDS,
  payload
});

export { ADD_COORDS, addCoordsAction, SET_COORDS };
