import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post("http://localhost:4000/api/v1/login", {
      email,
      password,
    });

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({
//       type: LOGIN_REQUEST,
//     });
//     const config = { headers: { "Content-Type": "application/json" } };
//     const { data } = await axios.post(
//       `http://localhost:4000/api/v1/login`,
//       { email, password },
//       config
//     );
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: data,
//     });
//     localStorage.setItem("user", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `http://localhost:4000/api/v1/register`,
      userData,
      config
    );

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
