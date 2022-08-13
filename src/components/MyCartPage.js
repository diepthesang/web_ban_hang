

import { Button, CardMedia, Checkbox, Container, Divider, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import { addMoreToCart, removeCartNumber, setTotal } from '../redux/cartSlice';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function MyCartPage() {
    const [amount, setAmount] = useState()
    const [product, setProduct] = useState([])
    const [total, setTotal] = useState(0);
    // const product = useSelector(state => state.cart.cart);
    const totalProductInCart = useSelector((state) => state.cart.cartNumber)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    let getAllProductInCart = async () => {
        try {
            let res = await axios.get('/allProductCart', {
                headers: {
                    'Authorization': localStorage['assToken'],
                }
            })
            setProduct(res.data)
            let arrTotal = _.map(res.data, 'total');
            let total = _.sum(arrTotal)
            setTotal(total)
        } catch (error) {
            navigate('/login')
        }
    }

    useLayoutEffect(
        () => {
            getAllProductInCart()
            console.log('>>>>>>>>>>>>>>>');
        }, [amount]
    );

    let addMoreProductInCart = async (productId, amount) => {
        let res = await axios.get(`/updateAmountProductInCart/${productId}/${amount}`, {
            headers: {
                'Authorization': localStorage['assToken'],
            }
        })
        console.log(res.data)
    }


    return (

        <Box minHeight='100vh' marginTop={10} >
            <Box children
                margin={5}>
                <Stack position='column'>

                    {product.map((item, index) => {
                        return (
                            <div key={item.id}>
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
                                                dispatch(addMoreToCart())
                                                let amount = item.amount++
                                                setAmount(amount)
                                                let amountPlus = amount + 1
                                                addMoreProductInCart(item.productId, amountPlus)
                                            }} ><AddBoxOutlinedIcon /></IconButton>
                                            <Typography variant='h5'>{item.amount}</Typography>
                                            <IconButton variant="outlined" onClick={() => {
                                                dispatch(addMoreToCart())
                                                let amount = item.amount--
                                                setAmount(amount)
                                                let amountPlus = amount - 1
                                                addMoreProductInCart(item.productId, amountPlus)
                                            }}><IndeterminateCheckBoxOutlinedIcon /></IconButton>
                                        </Stack>
                                    </Box>
                                    <Box> <Typography variant='h5'>  {item.price * item.amount} </Typography> </Box>

                                </Stack>
                                <Divider />
                            </div>
                        )
                    })}


                    <Stack paddingTop={1} direction='column' alignItems='flex-end' marginRight={13} spacing={1}>
                        {product.length === 0 ?

                            <Typography variant="subtitle1" paddingRight={60}>
                                Không có sản phẩm nào trong giõ hàng !
                            </Typography>
                            :

                            <>
                                <Box >
                                    <Typography variant='h5'>Total : {total}</Typography>
                                </Box>
                                <Button variant="contained" onClick={() => { navigate('/checkout') }} >
                                    MUA
                                </Button>
                            </>


                        }


                    </Stack>

                </Stack>


            </Box>

        </Box >

    )
}

export default MyCartPage;