import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductId } from '../redux/productSlice';
import { setCartNumber, addToCart } from '../redux/cartSlice'

function MyCard(props) {
    const { name, price, img, intro, id } = props;
    const dispatch = useDispatch()
    const cartNumber = useSelector(state => state.cart.cartNumber);



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
                <Stack direction='row' justifyContent="center">
                    <Button size="small" onClick={() => {
                        dispatch(addToCart({ productId: id, amount: 1, name: name, price: price, img: img }))
                    }} ><AddShoppingCartIcon /></Button>
                    <Button component={Link} to={'/detail/' + id} onClick={() => {
                        dispatch(getProductId({ productId: id }))
                    }} size="small">Xem chi tiết</Button>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default MyCard