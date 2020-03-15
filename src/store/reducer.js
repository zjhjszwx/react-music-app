import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";
import singersReducer from "../application/Singers/store/reducer";

export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer
});
