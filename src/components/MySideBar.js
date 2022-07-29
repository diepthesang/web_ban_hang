import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryId } from '../redux/categorySlice';


function MySideBar(props) {
    const [category, setCategory] = useState(props)
    const ditpatch = useDispatch()



    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
            <nav aria-label="main mailbox folders">
                <ListItem disablePadding >
                    <ListItemButton onClick={() => {
                        ditpatch(getCategoryId({ categoryId: props.cateId }));
                       // console.log(props.cateId)
                    }}>
                        <ListItemText primary={category.name} />
                    </ListItemButton>
                </ListItem>
            </nav>
        </Box>
    )
}

export default MySideBar