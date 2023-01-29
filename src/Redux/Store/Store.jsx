import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import rootReducers from '../Reducer/RootReducers';
import { UserReducer } from '../Reducer/UserReducer';

const composeEnhancer = window.__REDUX_DEVTOOL_SEXTENSION_COMPOSE__ || compose;
export const store = configureStore({reducer:rootReducers},composeEnhancer(applyMiddleware(thunk)))