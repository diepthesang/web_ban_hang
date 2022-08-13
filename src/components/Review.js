import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import axios from 'axios';
import { useState, } from 'react';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';
const _ = require('lodash')


export default function Review() {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const firstname = useSelector(state => state.cart.firstname)
    const lastname = useSelector(state => state.cart.lastname)
    const address = useSelector(state => state.cart.address)
    const phoneNumber = useSelector(state => state.cart.phoneNumber)
    const city = useSelector(state => state.cart.city)
    const country = useSelector(state => state.cart.country)



    let getAllProductInCart = async () => {
        var products = await axios.get('/allProductCart',
            {
                headers: {
                    'Authorization': localStorage['assToken'],
                }
            })
        console.log('>>>>>')
        console.log(products.data)
        setProducts(products.data)
        let arrTotal = _.map(products.data, 'total');
        let total = _.sum(arrTotal)
        setTotal(total)
    }

    useEffect(
        () => {
            getAllProductInCart()
        }, []
    )
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {total} VND
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{firstname} {lastname}</Typography>
                    <Typography gutterBottom> {phoneNumber}</Typography>
                    <Typography gutterBottom>{address} ,{city} ,{country}</Typography>

                </Grid>
                {/* <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid> */}
            </Grid>
        </React.Fragment>
    );
}
