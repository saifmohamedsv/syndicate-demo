import { combineReducers } from "redux";
import authReducer from "./authReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  auth: authReducer,
});
const config = {
  key: "root",
  whitelist: ["auth"],
  storage,
};

export default persistReducer(config, rootReducer);
