import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { thunk } from "redux-thunk";
import { customerProductReducer } from "./product/reducer";
import { cartReducer } from "./cart/reducer";
import { orderReducer } from "./order/reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
