import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { courseDetailsReducer, courseReducer } from "./reducers/courseReducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  courses: courseReducer,
  courseDetails: courseDetailsReducer,
  user: userReducer,
  
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

let initialState = {
  user: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
