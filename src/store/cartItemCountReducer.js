import { createSlice } from "@reduxjs/toolkit";



export const cartItemCountSlice = createSlice({
    name: 'cartItemCount',
    initialState: 0,
    reducers: {
        addToCart: (state, action) => {
            // if (action.payload === 10) {
            //     return state + 10
            // }
            // else {
            //     return state + 1
            // }
            return state + action.payload
        },
        // addToCart10: (state, action) => {
        //     return state + action.payload
        // },

        decreaseCart: (state) => {
            if (state === 0) {
                return
            }
            else {
                return state - 1
            }
        },
        removeAll: (state) => {
            return 0
        },
    }
})

export const {addToCart, decreaseCart, addToCart10, removeAll} = cartItemCountSlice.actions