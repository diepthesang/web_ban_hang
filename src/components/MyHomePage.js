
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import MySideBar from './MySideBar';
import MyCard from './MyCard';
import axios from 'axios';
import { useSelector } from 'react-redux';

function MyHomePage() {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const cateId = useSelector(state => state.category.categoryId)
    const search = useSelector(state => state.search.productName)

    const getDataProduct = async () => {
        const { data } = await axios.get(`/product`)
        setProduct(data);
    }

    const getDataCategory = async () => {
        const { data } = await axios.get(`/category`)
        setCategory(data);
    }

    const getDataProductByCateId = async () => {
        const { data } = await axios.get(`/category/${cateId}`)
        console.log('=====')
        console.log(cateId)
        console.log(data);
        setProduct(data)
    }

    const getDataProductByName = async () => {
        const { data } = await axios.get(`/searchProduct/${search}`)
        console.log(search)
        console.log('get data search')
        console.log(data);
        setProduct(data);
    }

    useEffect(() => {
        // getDataProduct()
        getDataProductByName()
        getDataCategory()
        //  getDataProductByCateId()
    }, [cateId], [search])

    return (
        <Box paddingTop={9} minHeight='100vh'>
            <Grid container paddingLeft={1} paddingRight={1} >
                <Grid item xs={12} sm={2} width='100vw'>
                    {category.map((item) => {
                        return (
                            <MySideBar name={item.name} cateId={item.id} />
                        )
                    })}
                </Grid>
                <Grid container justifyContent='space-around' alignItems='flex-start' xs={12} sm={10}  >
                    {product.map(item => {
                        return (<Grid item paddingTop={2}>
                            <Box>
                                <MyCard name={item.name} price={item.price} img={item.img} intro={item.intro} id={item.id} />
                            </Box>
                        </Grid>)
                    })}
                </Grid>
            </Grid>

        </Box>
    )
}
//
export default MyHomePage