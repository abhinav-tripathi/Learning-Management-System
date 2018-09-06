import "regenerator-runtime/runtime";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducers/LMS";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  devToolsEnhancer(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
