import { Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

function MyStarRating() {
    const [value, setValue] = React.useState(2);

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    )
}

export default MyStarRating