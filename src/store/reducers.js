import { combineReducers } from "redux";
import detailsReducer from "./global/reducer";

const rootReducer = combineReducers({
  detailsReducer
});
export { rootReducer };
