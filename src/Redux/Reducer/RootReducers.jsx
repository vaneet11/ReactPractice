import { combineReducers } from "@reduxjs/toolkit";
import { UserReducer } from "./UserReducer";

const rootReducers = combineReducers({
    UserReducer: UserReducer,
})