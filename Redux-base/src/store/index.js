import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import { customerReducer } from "./customerReducer";
import { cashReducer } from "./cashReducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  cash:cashReducer,
  customer:customerReducer,
})

export const  store = createStore(rootReducer, applyMiddleware(thunk));