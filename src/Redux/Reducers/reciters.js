import { GET_RECITERS } from "../Types/allTypes";

const initialState = {
  reciters: [],
};

export const recitersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECITERS:
      return {
        reciters: action.payload,
      };
    default:
      return state;
  }
};
