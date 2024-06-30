import { combineReducers } from "redux";
import { recitersReducer } from "./reciters";
import { moshafReducer } from "./moshaf";
import { surahReducer } from "./surah";
import { radiosReducer } from "./radios";
import { tvLiveReducer } from "./tvLive";

export const rootReducers = combineReducers({
  GET_ALL_RECITERS: recitersReducer,
  GET_ALL_MOSHAF: moshafReducer,
  GET_SURAHS: surahReducer,
  GET_RADIOS: radiosReducer,
  GET_TV_LIVE: tvLiveReducer,
});
