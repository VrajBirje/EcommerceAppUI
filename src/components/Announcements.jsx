import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
`
export const Announcements = () => {
  return (
    <Container>Super deal! Free shipping on orders over 5000/-</Container>
  )
}
