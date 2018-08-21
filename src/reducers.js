import { combineReducers } from "redux";
import { homeReducer } from "./Home/reducers";
import { documentListReducer } from "./DocumentList/reducers";
import { documentDetailReducer } from "./DocumentDetail/reducers";
import { notificationsReducer } from "./Notifications/reducers";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  documentListReducer: documentListReducer,
  documentDetailReducer: documentDetailReducer,
  notificationsReducer: notificationsReducer
});

export default rootReducer;
