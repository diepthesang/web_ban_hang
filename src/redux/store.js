import { configureStore } from "@reduxjs/toolkit"
import productReducer from './productSlice'
import categoryReducer from './categorySlice'
import searchReducer from './searchSlice'
export default configureStore({
    reducer: {

        product: productReducer,
        category: categoryReducer,
        search: searchReducer

    }
})