import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
// import vraj from '../assets/images/vraj2.png'
import { SliderItems } from '../data.js'
import { useNavigate } from 'react-router-dom'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    bottom: 0;
    margin:auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex:1;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    letter-spacing: 3px;
    font-weight: 500;
    font-size: 20px;
`
const Button = styled.button`
    background-color: transparent;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }
        else if(direction==="right"){
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
    }
    const navigate = useNavigate();
  return (
    <Container>
        <Arrow direction="left" onClick={()=>{handleClick('left')}}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {SliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button onClick={() => navigate('/productlist')}>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>{handleClick('right')}}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}
