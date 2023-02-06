import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import newsReducer from "../slice/index";
import { configureStore } from "@reduxjs/toolkit";
import saga from "../sagas/saga";

const reducer = combineReducers({
  news: newsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
