

import { Grid, Link } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';


function MyFooter() {

    return (
        <Box
            marginTop={2}
            left={0}
            right={0}
            // bottom={0}
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 2 }}
            bgcolor='gray'
            color='white'>
            <Container maxWidth='lg'>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} >
                            Help
                        </Box>
                        <Box>
                            <Link underline='none' href="/detail" color='inherit'>detail</Link>
                        </Box>
                        <Box>
                            <Link underline='none' href="/" color='inherit'>home</Link>
                        </Box>
                        <Box>
                            <Link underline='none' href="#" color='inherit'>Link</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} >
                            Help
                        </Box>
                        <Box>
                            <Link underline='none' href="#" color='inherit'>Link</Link>
                        </Box>
                        <Box>
                            <Link underline='none' href="#" color='inherit'>Link</Link>
                        </Box>
                        <Box>
                            <Link underline='none' href="#" color='inherit'>Link</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} >
                            Help
                        </Box>
                        <Box>
                            <Link underline='none' href="/" color='inherit'>Link</Link>
                        </Box>
                        <Box>
                            <Link underline='none' href="#" color='inherit'>Link</Link>
                        </Box>
                        <Box>
                            <Link underline='none' href="#" color='inherit'>Link</Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign='center'
                    pt={{ xs: 5, sm: 10 }}
                    pb={{ xs: 5, sm: 0 }}>
                    Product by Diep The Sang &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>

    )
}

export default MyFooter