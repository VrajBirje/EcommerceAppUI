import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'
import { useNavigate } from "react-router-dom";

const Container = styled.div`
   height: 80px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Input = styled.input`
    border: none;
`

const MenuItem = styled.div`
    cursor: pointer;
    font-size: 14px;
    margin-left: 25px;
`

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{
                            color: grey,
                            fontSize: 16
                        }}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        VRAJ.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem onClick={() => navigate('/register')} >REGISTER</MenuItem>
                    <MenuItem onClick={() => navigate('/login')}>SIGNIN</MenuItem>
                    <MenuItem>
                        <ShoppingCartOutlined onClick={() => navigate('/cart')}/>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
