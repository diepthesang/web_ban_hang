import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function MyDetail() {
    return (
        <div>
            <div>
                My detail
            </div>
            <Button component={Link} to="/" variant="contained" color="primary">
                Home
            </Button>
        </div>
    )
}

export default MyDetail