import { createSlice } from "@reduxjs/toolkit";



export const cartItemCountSlice = createSlice({
    name: 'cartItemCount',
    initialState: 100,
    reducers: {
        addToCart: (state) => {
            return state + 1
        }
    }
})