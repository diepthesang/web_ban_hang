import { createSlice } from "@reduxjs/toolkit";


export const categorySlice = createSlice(
    {
        name: "category",
        initialState: {
            categoryId: 1
        },
        reducers: {
            getCategoryId: (state, action) => {
                state.categoryId = action.payload.categoryId;

            }
        }
    }
)

export const { getCategoryId } = categorySlice.actions
export default categorySlice.reducer;
