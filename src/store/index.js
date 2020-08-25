import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

let store;

export function configureStore() {
  store = createStore(applyMiddleware(thunk, logger));
  return store;
}
