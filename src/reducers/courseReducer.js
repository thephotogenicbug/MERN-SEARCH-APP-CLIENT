import {
  ALL_COURSE_FAIL,
  ALL_COURSE_REQUEST,
  ALL_COURSE_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/courseConstants";

export const courseReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case ALL_COURSE_REQUEST:
      return {
        loading: true,
        product: [],
      };
    case ALL_COURSE_SUCCESS:
      return {
        loading: true,
        courses: action.payload.courses,
        coursesCount: action.payload.coursesCount,
      };
    case ALL_COURSE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
