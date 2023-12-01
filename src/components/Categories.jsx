import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import { CategoryItems } from './CategoryItems'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`
export const Categories = () => {
  return (
    <Container>
        {categories.map((item)=>(
            <CategoryItems item={item} key={item.id}/>
        ))}
    </Container>
  )
}
