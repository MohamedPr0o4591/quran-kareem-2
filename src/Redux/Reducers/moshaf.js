import { GET_MOSHAF_RECITER } from "../Types/allTypes";

const initialState = {
  moshaf: [],
};
export const moshafReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOSHAF_RECITER:
      return {
        moshaf: action.payload,
      };
    default:
      return state;
  }
};
