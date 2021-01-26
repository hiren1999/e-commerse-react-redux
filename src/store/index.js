import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = combineReducers({
    productReducer,
    cartReducer,
});

const store = createStore(root, composeEnhancers(applyMiddleware(thunk)));

export default store;
