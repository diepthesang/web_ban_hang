import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductId } from '../redux/productSlice';
function MyCard(props) {
    const [data, setData] = useState(props)
    const ditpatch = useDispatch()




    return (
        <Card sx={{ maxWidth: 270 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={data.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.intro}
                </Typography>
            </CardContent>
            <CardActions>
                <Stack direction='row' justifyContent="center">
                    <Button size="small"><AddShoppingCartIcon /></Button>
                    <Button component={Link} to={'/detail/' + data.id} onClick={() => {
                        ditpatch(getProductId({ productId: data.id }))
                    }} size="small">Xem chi tiết</Button>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default MyCard