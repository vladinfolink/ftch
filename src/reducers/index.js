import { combineReducers } from "redux";
import nodesReducer from "./nodesReducer";


export default combineReducers({
  nodes: nodesReducer,
});



