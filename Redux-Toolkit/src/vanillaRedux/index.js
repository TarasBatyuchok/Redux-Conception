import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import { mainReducer } from "./mainReducer";

import thunk from "redux-thunk"

const rootReducer = combineReducers({
  main: mainReducer,
})

export const  store = createStore(rootReducer, applyMiddleware(thunk));