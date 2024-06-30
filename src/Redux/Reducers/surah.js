import { GET_ALL_SURAHS } from "../Types/allTypes";

const initialState = {
  surah: [],
};
export const surahReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SURAHS:
      return {
        surah: action.payload,
      };
    default:
      return state;
  }
};
