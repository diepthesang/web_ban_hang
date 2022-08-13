import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useLayoutEffect } from 'react';
import { infoCheckout } from '../redux/cartSlice';

export default function AddressForm() {
    const dispatch = useDispatch()
    const firstname = useSelector(state => state.cart.firstname)
    const lastname = useSelector(state => state.cart.lastname)
    const address = useSelector(state => state.cart.address)
    const phoneNumber = useSelector(state => state.cart.phoneNumber)
    const city = useSelector(state => state.cart.city)
    const country = useSelector(state => state.cart.country)


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={firstname}
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={
                            // handleSubmitAddressCheckout
                            (event) => {
                                dispatch(infoCheckout({
                                    firstname: event.target.value
                                }))

                            }
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={lastname}
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={
                            // handleSubmitAddressCheckout
                            (event) => {
                                dispatch(infoCheckout({
                                    lastname: event.target.value
                                }))
                            }
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        value={phoneNumber}
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Số điện thoại"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={
                            // handleSubmitAddressCheckout
                            (event) => {
                                dispatch(infoCheckout({
                                    phoneNumber: event.target.value
                                }))
                            }
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        value={address}
                        required
                        id="address"
                        name="address1"
                        label="Địa chỉ"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={
                            // handleSubmitAddressCheckout
                            (event) => {
                                dispatch(infoCheckout({
                                    address: event.target.value
                                }))
                            }
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={city}
                        required
                        id="city"
                        name="city"
                        label="Thành phố"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        onChange={
                            // handleSubmitAddressCheckout
                            (event) => {
                                dispatch(infoCheckout({
                                    city: event.target.value
                                }))
                            }
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        value={country}
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        onChange={
                            // handleSubmitAddressCheckout
                            (event) => {
                                dispatch(infoCheckout({
                                    country: event.target.value
                                }))
                            }
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}