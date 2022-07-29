import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            cartNumber: 99
        },
        reducers: {
            setcartNumber: (state, action) => {
                state.cartNumber = action.payload.cartNumber;

            }
        }
    }
)



export const { setcartNumber } = cartSlice.actions
export default cartSlice.reducer;