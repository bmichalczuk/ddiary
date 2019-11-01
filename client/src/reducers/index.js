import {combineReducers} from "redux";
import authReducer from "./authReducer";
import flashMsgReducer from "./flashMsgReducer";

export default combineReducers({
    auth: authReducer,
    flashMsg: flashMsgReducer
});