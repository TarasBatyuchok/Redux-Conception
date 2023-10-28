import { legacy_createStore as createStore, combineReducers } from "redux";

import { customerReducer } from "./customerReducer";
import { cashReducer } from "./cashReducer";

const rootReducer = combineReducers({
  cash:cashReducer,
  customer:customerReducer,
})

export const  store = createStore(rootReducer);