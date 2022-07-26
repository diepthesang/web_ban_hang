import { Button, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MyStarRating from './MyStarRating'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function MyDetail() {
    return (
        <Box minHeight='100vh' marginTop={9} >
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
                        src="https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/600_600_iphone_12_mau_tim_purple_64gb_xtmobile.jpg"
                    />
                </Grid>
                <Grid container xs={12} sm={6} marginTop={3}>
                    <Grid container>
                        <Stack>
                            <Box>
                                <Typography gutterBottom variant="h4" component="div">
                                    iPhone 12 64GB (LikeNew 99,99% - FullBox) - Pin 100%
                                </Typography>
                            </Box>
                            <MyStarRating></MyStarRating>
                            <Typography variant="h4" component="h2" color='red'>
                                10000000000
                            </Typography>
                            <Stack direction='row' spacing={2}>
                                <Box>
                                    <Button variant="outlined">Mua ngay</Button>
                                </Box>
                                <Box>
                                    <Button variant="outlined">
                                        <AddShoppingCartIcon></AddShoppingCartIcon>
                                    </Button>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MyDetail