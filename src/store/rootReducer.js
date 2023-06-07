import { combineReducers } from "redux";
import auth from "./auth";
import listUser from "./listUser";
import jsonUser from "./jsonUser";
import singleData from "./oneUserData";

const rootReducer = combineReducers({
  auth,
  listUser,
  jsonUser,
  singleData
})

export default rootReducer