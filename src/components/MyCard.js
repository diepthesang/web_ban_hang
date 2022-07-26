import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function MyCard() {
    return (
        <Card sx={{ maxWidth: 270 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image="https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/600_600_iphone_12_mau_tim_purple_64gb_xtmobile.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default MyCard