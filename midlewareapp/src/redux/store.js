import { createStore,applyMiddleware } from "redux";
import countterReducer from "./reducer";

//customemiddleware

const loggermiddleware=(store)=>(next)=>(action)=>{

    console.log("MiddeWare Intercepterd",action);
    next(action);



}
const Store=createStore(countterReducer,applyMiddleware(loggermiddleware));

export default Store
