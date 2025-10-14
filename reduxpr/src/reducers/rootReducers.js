
import { combineReducers } from "redux";

import authReducer from "./authreducer"
import counterReducer from "./counterreducer";


const rootReducer= combineReducers({
counter:counterReducer,
auth:authReducer,

});
export default rootReducer;