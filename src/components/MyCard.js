import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductId } from '../redux/productSlice';
import { setCartNumber, addMoreToCart } from '../redux/cartSlice'
import { useEffect } from 'react';

function MyCard(props) {
    const { name, price, img, intro, id } = props;
    const dispatch = useDispatch()
    // const cartNumber = useSelector(state => state.cart.cartNumber);



    return (
        <Card sx={{ maxWidth: 270 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {intro}
                </Typography>
            </CardContent>
            <CardActions>
                <Stack direction='row' justifyContent="space-evenly">
                    <Typography variant="h7" color='red' >
                        {price} VND
                    </Typography>

                    <Button variant="outlined" component={Link} to={'/detail/' + id} onClick={() => {
                        dispatch(getProductId({ productId: id }))
                    }} size="small">Xem chi tiết</Button>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default MyCard