import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: true, userInfo: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true };
    case REGISTER_USER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case REGISTER_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


// export const userReducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//     case REGISTER_USER_REQUEST:
//       return {
//         loading: true,
//         isAuthenticated: false,
//       };
//     case LOGIN_SUCCESS:
//     case REGISTER_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isAuthenticated: true,
//         user: action.payload,
//       };

//     case LOGOUT_SUCCESS:
//       return {
//         loading: false,
//         user: null,
//         isAuthenticated: false,
//       };
//     case LOGIN_FAIL:
//     case REGISTER_USER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         isAuthenticated: false,
//         user: null,
//         error: action.payload,
//       };

//     case LOGOUT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case USER_LOGOUT:
//       return {};

//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };
