import axios from "axios";
import {
  ALL_COURSE_FAIL,
  ALL_COURSE_REQUEST,
  ALL_COURSE_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/courseConstants";

// get course
export const getCourse = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_COURSE_REQUEST,
    });
    const { data } = await axios.get("http://localhost:4000/api/v1/courses");
    dispatch({
      type: ALL_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_COURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};