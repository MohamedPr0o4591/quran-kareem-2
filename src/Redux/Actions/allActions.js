import axios from "axios";
import {
  GET_ALL_SURAHS,
  GET_MOSHAF_RECITER,
  GET_RECITERS,
  GET_TV_LIVE,
  SET_RADIOS,
} from "../Types/allTypes";

export const getAllReciters = (_) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v3/reciters?language=ar`
      );

      dispatch({
        type: GET_RECITERS,
        payload: res.data.reciters,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMoshafReciter = (reciterId) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/v3/reciters?language=ar&reciter=${reciterId}`
      );

      dispatch({
        type: GET_MOSHAF_RECITER,
        payload: res.data.reciters,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllSurahs = (_) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v3/suwar?language=ar`
      );

      dispatch({
        type: GET_ALL_SURAHS,
        payload: res.data.suwar,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getAllRadios = (_) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v3/radios?language=ar`
      );

      dispatch({
        type: SET_RADIOS,
        payload: res.data.radios,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllTvLiveData = (_) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v3/live-tv?language=ar`
      );

      dispatch({
        type: GET_TV_LIVE,
        payload: res.data.livetv,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
