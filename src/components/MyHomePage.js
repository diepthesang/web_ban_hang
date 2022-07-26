
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


import MySideBar from './MySideBar';
import MyCard from './MyCard';

function MyBody() {
    return (
        <Box paddingTop={9}>
            <Grid container paddingLeft={1} paddingRight={1} >

                <Grid item xs={12} sm={2} width='100vw'>
                    <MySideBar></MySideBar>
                </Grid>
                <Grid container justifyContent='space-around' alignItems='flex-start' xs={12} sm={10}  >
                    <Grid item paddingTop={2}>
                        <Box>
                            <MyCard></MyCard>
                        </Box>
                    </Grid>
                    <Grid item paddingTop={2}>
                        <Box>
                            <MyCard></MyCard>
                        </Box>
                    </Grid>
                    <Grid item paddingTop={2}>
                        <Box>
                            <MyCard></MyCard>
                        </Box>
                    </Grid>
                    <Grid item paddingTop={2}>
                        <Box>
                            <MyCard></MyCard>
                        </Box>
                    </Grid>
                    <Grid item paddingTop={2}>
                        <Box>
                            <MyCard></MyCard>
                        </Box>
                    </Grid>
                    <Grid item paddingTop={2}>
                        <Box>
                            <MyCard></MyCard>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    )
}

export default MyBody