import { combineReducers } from "redux";
import postReducer from "../reducers/postReducers";

const rootReducer = combineReducers({
	postReducer,
});
export default rootReducer;
