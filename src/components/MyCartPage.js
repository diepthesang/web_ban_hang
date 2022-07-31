

import { Button, CardMedia, Checkbox, Container, Divider, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCartNumber, setTotal } from '../redux/cartSlice';
import _ from 'lodash';

function MyCartPage() {

    const dispatch = useDispatch();
    const product = useSelector(state => state.cart.cart);
    const total = useSelector(state => state.cart.total)

    useEffect(
        () => {
            dispatch(setTotal())
        }
    )

    return (

        <Box minHeight='100vh' marginTop={10} >
            <Box children
                margin={5}>
                <Stack position='column'>

                    {product.map(item => {
                        return (
                            <>

                                <Stack direction='row'
                                    spacing={12}>
                                    <Box > <Checkbox defaultChecked /></Box>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 233,
                                            width: 350,
                                            maxHeight: { xs: 100, md: 100 },
                                            maxWidth: { xs: 100, md: 100 },
                                        }}
                                        alt="The house from the offer."
                                        src={item.img}
                                    />
                                    <Box maxWidth={250}> <Typography variant='h5'>{item.name}</Typography> </Box>
                                    <Box> <Typography variant='h5'>{item.price}</Typography> </Box>
                                    <Box>
                                        <Stack spacing={1} direction='row' margin={3}>
                                            <IconButton variant="outlined" onClick={() => {
                                                dispatch(addToCart({ productId: item.productId, amount: 1 }))
                                            }} ><AddBoxOutlinedIcon /></IconButton>
                                            <Typography variant='h5'>{item.amount}</Typography>
                                            <IconButton variant="outlined" onClick={() => { dispatch(removeCartNumber({ productId: item.productId, amount: 1 })) }}><IndeterminateCheckBoxOutlinedIcon /></IconButton>
                                        </Stack>
                                    </Box>
                                    <Box> <Typography variant='h5'>  {item.price * item.amount} </Typography> </Box>



                                </Stack>
                                <Divider />
                            </>
                        )
                    })}


                    <Stack paddingTop={1} direction='column' alignItems='flex-end' marginRight={13} spacing={1}>
                        <Box >
                            <Typography variant='h5'>Total : {total}</Typography>
                        </Box>
                        <Button variant="contained" >
                            Đặt hàng
                        </Button>


                    </Stack>

                </Stack>


            </Box>

        </Box >

    )
}

export default MyCartPage;