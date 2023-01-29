import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit'
import RootReducer from '../../../../form/src/Redux/Reducer/RootReducer';
import thunk from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS - EXTENSION_COMPOSE__ || compose;
const store = configureStore(RootReducer, composeEnhancer(applyMiddleware(thunk)))