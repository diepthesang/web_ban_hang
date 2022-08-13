import { createSlice } from "@reduxjs/toolkit";
var _ = require('lodash');

export const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            cartNumber: 0,
            total: 0,
            firstname: '',
            lastname: '',
            phoneNumber: '',
            address: '',
            city: '',
            country: '',
        },
        reducers: {

            addMoreToCart: (state) => {
                state.cartNumber += 1;
            },
            setTotal: (state, action) => {
                state.total = action.payload.total;
            },
            infoCheckout: (state, action) => {
                if (action.payload.firstname) {
                    state.firstname = action.payload.firstname
                }
                if (action.payload.lastname) {
                    state.lastname = action.payload.lastname
                }
                if (action.payload.phoneNumber) {
                    state.phoneNumber = action.payload.phoneNumber
                }
                if (action.payload.address) {
                    state.address = action.payload.address
                }
                if (action.payload.city) {
                    state.city = action.payload.city
                }
                if (action.payload.country) {
                    state.country = action.payload.country
                }

            }
        }
    }
)



export const { setCartNumber, addMoreToCart, removeCartNumber, setTotal, infoCheckout } = cartSlice.actions
export default cartSlice.reducer;