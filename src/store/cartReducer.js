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

        // removeProductToCart: (state, action) => {
        //     state.count -= 1
        // },

        removeProductFromCart: (state, action) => {
            const productId = action.payload;
            const itemIndex = state.findIndex(item => item.id === productId);
      
            if (itemIndex !== -1) {
              const item = state[itemIndex];
      
              if (item.count > 1) {
                state[itemIndex] = { ...item, count: item.count - 1 };
              } else {
                state.splice(itemIndex, 1);
              }
            }
          },
    },
 })

 export const {addProductToCart, removeProductFromCart} = cartSlice.actions