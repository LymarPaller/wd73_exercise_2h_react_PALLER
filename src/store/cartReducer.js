import { createSlice } from "@reduxjs/toolkit";

 export const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers: {
        addProductToCart: (state, action) => {
            const newState = [...state]
            const product = action.payload

            const duplicateIndex = newState.findIndex(card => card.id === product.id)

            if (duplicateIndex === -1) {
                newState.push(product)
            }
            else {
                newState[duplicateIndex] = {
                    ...newState[duplicateIndex],
                    count: newState[duplicateIndex].count + product.count
                }
            }

            return newState
        },

        removeProductFromCart: (state, action) => {
            const productId = action.payload;
            const itemIndex = state.findIndex(item => item.id === productId);
            // console.log('itemIndex', itemIndex)
      
            if (itemIndex !== -1) {
              const item = state[itemIndex];
              // console.log('item', {...item})
      
              if (item.count > 1) {
                state[itemIndex] = { ...item, count: item.count - 1 };
                // console.log('stateItem', state[itemIndex])
              } else {
                state.splice(itemIndex, 1);
              }
            }
        },

        removeAllProductFromCart: (state, action) => {
          const productId = action.payload;
          const itemIndex = state.findIndex(item => item.id === productId);
    
          if (itemIndex !== -1) {
            state.splice(itemIndex, 1);
          }
        },
    },
 })

 export const {addProductToCart, removeProductFromCart, addProductToCart10, removeAllProductFromCart} = cartSlice.actions