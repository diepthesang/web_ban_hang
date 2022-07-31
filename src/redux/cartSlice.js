import { createSlice } from "@reduxjs/toolkit";
var _ = require('lodash');

export const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            cartNumber: 0,
            total: 0,
            cart: []

        },
        reducers: {
            // setCartNumber: (state) => {
            //     state.cartNumber += 1;

            // },
            removeCartNumber: (state, action) => {

                var ob = _.find(state.cart, {
                    productId: action.payload.productId,

                })
                let index = 0;
                if (ob) {
                    for (let item in state.cart) {
                        if (state.cart[item].productId === action.payload.productId) {
                            index = item;
                            console.log(index);
                        }
                    }
                    if (state.cart[index].amount > 0) {
                        state.cartNumber -= 1;
                        console.log(state.cart[index].amount)
                        state.cart[index].amount = state.cart[index].amount - action.payload.amount
                    } else {
                        return
                    }



                }
            },
            addToCart: (state, action) => {
                state.cartNumber += 1;

                var ob = _.find(state.cart, {
                    productId: action.payload.productId,

                })
                let index = 0;
                if (ob) {
                    for (let item in state.cart) {
                        if (state.cart[item].productId === action.payload.productId) {
                            index = item;
                            console.log(index);
                        }
                    }
                    state.cart[index].amount = action.payload.amount + state.cart[index].amount
                } else {
                    state.cart.push(
                        {
                            productId: action.payload.productId,
                            amount: action.payload.amount,
                            name: action.payload.name,
                            price: action.payload.price,
                            img: action.payload.img,
                        }
                    )

                }

            },
            setTotal: (state) => {
                let arr = state.cart.map(item => item.amount * item.price)
                state.total = _.sum(arr)

            }
        }
    }
)



export const { setCartNumber, addToCart, removeCartNumber, setTotal } = cartSlice.actions
export default cartSlice.reducer;