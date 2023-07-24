import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartItemCountSlice } from "./cartItemCountReducer";

const rootReducer = combineReducers({
    cartItemCount: cartItemCountSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})