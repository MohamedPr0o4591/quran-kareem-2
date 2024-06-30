import { SET_RADIOS } from "../Types/allTypes";

const initialState = {
  radio: [],
};

export const radiosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RADIOS:
      return {
        radio: action.payload,
      };
    default:
      return state;
  }
};
