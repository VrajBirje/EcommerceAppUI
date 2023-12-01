import React from 'react'
import { Navbar } from '../components/Navbar'
import { Announcements } from '../components/Announcements'
import styled from 'styled-components'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
import { Add, Remove} from '@material-ui/icons'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const ImageContainer = styled.div`
    flex:1;
    
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200px;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100px;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width:50%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    padding: 10px;
    margin-left: 5px;
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
`

const Amount = styled.span`
    border-radius: 10px;
    border: 1px solid teal;
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Button = styled.button`
    padding: 15px;
    background-color: white;
    font-weight: 500;
    cursor: pointer;
    border: 2px solid teal;
    &:hover{
        background-color: #f8f4f4;
    }
`


export const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Suit</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus praesentium reprehenderit tempora saepe aspernatur ad animi nemo, delectus suscipit nam obcaecati, dolorum dolore libero.</Desc>
                <Price>₹ 20000/-</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colour:</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
