import React from 'react'
import styled from 'styled-components'
import {Navbar} from '../components/Navbar.js'
import { Announcements } from '../components/Announcements.jsx'
import {Products} from '../components/Products.jsx'
import {Newsletter} from '../components/Newsletter.jsx'
import {Footer} from '../components/Footer.jsx'

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``
export const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Colour</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                    <Option>Colour</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>xs</Option>
                    <Option>s</Option>
                    <Option>m</Option>
                    <Option>l</Option>
                    <Option>xl</Option>
                    <Option>xxl</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort by:</FilterText>
                <Select>
                    <Option>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
