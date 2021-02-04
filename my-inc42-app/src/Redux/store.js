import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import AuthReducer from "./LoginRedux/reducer"
import RegisterReducer from "./RegisterRedux/reducer"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers( {data:reducer,login:AuthReducer,register:RegisterReducer})
export const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )