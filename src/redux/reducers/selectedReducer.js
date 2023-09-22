import { ADD_TO_SELECTED } from "../action";

const initialState = {
  content: [],
};
const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SELECTED:
      return {
        content: [state.content, action.payload],
      };

    default:
      return state;
  }
};
export default selectedReducer;
