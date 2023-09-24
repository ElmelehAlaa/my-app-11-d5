import { GET_ARTIST } from "../action";

const initialState = {
  content: [],
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default artistReducer;
