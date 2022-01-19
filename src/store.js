import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { courseDetailsReducer, courseReducer } from "./reducers/courseReducer";

const reducer = combineReducers({
    courses: courseReducer,
    courseDetails:courseDetailsReducer,
});

let initialState = {};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store
