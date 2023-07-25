import { createSlice } from "@reduxjs/toolkit";



export const cartItemCountSlice = createSlice({
    name: 'cartItemCount',
    initialState: 0,
    reducers: {
        addToCart: (state, action) => {
            return state + action.payload
        },
        decreaseCart: (state, action) => {
            return state - action.payload
        }
    }
})

export const {addToCart, decreaseCart} = cartItemCountSlice.actions