import { createSlice } from "@reduxjs/toolkit";




export const productSlice = createSlice(
    {
        name: "product",
        initialState: {
            productId: 0
        },
        reducers: {
            getProductId: (state, action) => {
                state.productId = action.payload.productId; 
            }
        }
    }
)


export const { getProductId } = productSlice.actions
export default productSlice.reducer;
