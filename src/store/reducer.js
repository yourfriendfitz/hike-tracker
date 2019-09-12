import { ADD_COORDS, SET_COORDS } from "./actions";

const initialState = {
  coords: []
};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case ADD_COORDS:
      state.coords = [...state.coords, { ...payload }];
      return { ...state, ...payload };

    case SET_COORDS:
      state.coords = [...payload];
      return { ...state, ...payload };

    default:
      return state;
  }
};
