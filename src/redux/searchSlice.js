import { createSlice } from "@reduxjs/toolkit";



export const searchSlice = createSlice(
    {
        name: "search",
        initialState: {
            productName: 'iphone '
        },
        reducers: {
            getProductNameFromSearch: (state, action) => {
                state.productName = action.payload.productName;

            }
        }
    }
)


export const { getProductNameFromSearch } = searchSlice.actions
export default searchSlice.reducer;