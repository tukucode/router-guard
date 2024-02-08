import { combineReducers, legacy_createStore as createStore } from "redux";
import { reducerAuth } from "./reducers/auth";

const store = combineReducers({
  auth: reducerAuth,
});

export default createStore(store);
