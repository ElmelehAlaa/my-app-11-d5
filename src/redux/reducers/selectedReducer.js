import { ADD_TO_SELECTED } from "../action";

const initialState = {
  content: null,
};
const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SELECTED:
      return {
        content: action.payload,
      };

    default:
      return state;
  }
};
export default selectedReducer;
