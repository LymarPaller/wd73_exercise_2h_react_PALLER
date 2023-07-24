import { createSlice } from "@reduxjs/toolkit";

 export const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers: {
        addProductToCart: (state, action) => {
            const newState = [...state]
            const product = action.payload

            const duplicateIndex = newState.findIndex(item => item.id === product.id)

            if (duplicateIndex === -1) {
                product.count = 1
                newState.push(product)
            }
            else {
                newState[duplicateIndex] = {
                    ...newState[duplicateIndex],
                    count: newState[duplicateIndex].count + 1
                }
            }

            return newState
        },
    },
 })

 export const {addProductToCart} = cartSlice.actions