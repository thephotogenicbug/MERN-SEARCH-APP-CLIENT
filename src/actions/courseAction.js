import axios from "axios";
import {
  ALL_COURSE_FAIL,
  ALL_COURSE_REQUEST,
  ALL_COURSE_SUCCESS,
  CLEAR_ERRORS,
  COURSE_DETAILS_FAIL,
  COURSE_DETAILS_REQUEST,
  COURSE_DETAILS_SUCCESS,
} from "../constants/courseConstants";

// get course
export const getCourse =
  (keyword = "", price = [0, 6000], university) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_COURSE_REQUEST,
      });

      let link = `http://localhost:4000/api/v1/courses?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
       
      if (university) {
        link = `http://localhost:4000/api/v1/courses?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&university=${university}`;
      }

      const { data } = await axios.get(link);
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

//get course details
export const getCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_DETAILS_REQUEST,
    });
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/course/${id}`
    );
    dispatch({
      type: COURSE_DETAILS_SUCCESS,
      payload: data.course,
    });
  } catch (error) {
    dispatch({
      type: COURSE_DETAILS_FAIL,
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
