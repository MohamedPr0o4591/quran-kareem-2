import { GET_TV_LIVE } from "../Types/allTypes";

const initialState = {
  data: [],
};
export const tvLiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TV_LIVE:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
