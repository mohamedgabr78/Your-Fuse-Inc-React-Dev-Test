import { configureStore } from "@reduxjs/toolkit";

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { productListReducer } from "../reducer/Reducer";

const logger = createLogger();
const reducer = combineReducers({ productListReducer: productListReducer });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk, logger))
);

export default store;
