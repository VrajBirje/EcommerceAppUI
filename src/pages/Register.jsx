import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    display: flex;
    justify-content: center;
    background-size: cover;
    align-items: center;
`
const Wrapper = styled.div`
    width: 40%;
    background-color: white;
    padding: 20px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
`
export const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder='name'></Input>
                <Input placeholder='last name'></Input>
                <Input placeholder='user name'></Input>
                <Input placeholder='email'></Input>
                <Input placeholder='password'></Input>
                <Input placeholder='confirm password'></Input>
                <Agreement>By creating an account, I consent to the processing of my personal information in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
                
            </Form>
        </Wrapper>
    </Container>
  )
}
