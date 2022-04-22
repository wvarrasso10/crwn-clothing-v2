import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger/src";
import { RootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

//root-reducer
export const store = createStore(RootReducer, undefined, composedEnhancers);
