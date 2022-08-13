import { Button, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import MyStarRating from './MyStarRating'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addMoreToCart, removeCartNumber, setTotal } from '../redux/cartSlice';

import { useParams, useNavigate } from 'react-router-dom';
function MyDetailPage(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({});
    const productId = useSelector((state) => state.product.productId)
    let { id } = useParams()

    const getDataProductById = async () => {
        let { data } = await axios.get(`/product/${productId || id}`)
        console.log(data)
        setProduct(data[0])
    }

    useEffect(
        () => {
            getDataProductById()
        }
        , []

    )

    let addToCart = async (productId, name, price, img, amount) => {
        let res = await axios.post('/setProductCart',
            {
                productId: productId,
                name: name,
                price: price,
                img: img,
                amount: amount
            },
            {
                headers: {
                    'Authorization': localStorage['assToken'],
                }
            },)
        console.log(res.data)
    }



    return (
        <Box minHeight='100vh' marginTop={9} >
            {console.log(product.name)}
            <Grid container paddingLeft={1} paddingRight={1} >
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" xs={12} sm={6}
                    marginTop={3}>
                    <Box
                        component="img"
                        sx={{
                            //  boxShadow: 3,
                            height: 400,
                            width: 400,
                        }}
                        alt="The house from the offer."
                        src={product.img}
                    />
                </Grid>
                <Grid container xs={12} sm={6} marginTop={3}>
                    <Grid container>
                        <Stack>
                            <Box>
                                <Typography gutterBottom variant="h4" component="div">
                                    {product.name}
                                </Typography>
                            </Box>
                            <MyStarRating></MyStarRating>
                            <Typography variant="h4" component="h2" color='red'>
                                {product.price}
                            </Typography>
                            <Typography gutterBottom variant="h4" component="div">
                                {product.description}
                            </Typography>
                            <Stack direction='row' spacing={2}>
                                {/* <Box>
                                    <Button variant="outlined" onClick={() => { dispatch(addMoreToCart()) }} >Mua ngay</Button>
                                </Box> */}
                                <Box>
                                    {/* <Button size="small" onClick={() => {
                                        dispatch(addMoreToCart())
                                    }} ><AddShoppingCartIcon /></Button> */}
                                    <Button variant="outlined" onClick={() => {
                                        if (!localStorage['assToken']) {
                                            console.log(localStorage['assToken'])
                                            navigate('/login')

                                        } else {
                                            dispatch(addMoreToCart())
                                            addToCart(id, product.name, product.price, product.img, 1)
                                        }

                                    }} >
                                        <AddShoppingCartIcon></AddShoppingCartIcon>
                                    </Button>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid >
        </Box >
    )
}

export default MyDetailPage