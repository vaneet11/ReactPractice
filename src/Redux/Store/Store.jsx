import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import rootReducers from '../Reducer/RootReducers';
import { UserReducer } from '../Reducer/UserReducer';

const composeEnhancer = window.__REDUX_DEVTOOLSEXTENSION_COMPOSE__ || compose;
export const store = configureStore(UserReducer)