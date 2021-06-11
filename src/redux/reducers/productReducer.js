// data
import { ADD_EXPLORE } from "redux/actions/types";

let initialState = {};

const ReducerExplores = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXPLORE: {
      let tempArray = [payload];
      state.exploreData = tempArray;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default ReducerExplores;
