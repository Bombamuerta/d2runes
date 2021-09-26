import React from 'react'
import styled from 'styled-components/macro'

const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid red;
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  justify-content: center;  
  align-items: center;
`

const HeaderInner = styled.div`
  width: 95vw;
  padding: 1rem 2rem;
`

export const Header = ({text}) => (
  <HeaderContainer>
      <HeaderInner>{text}</HeaderInner>
  </HeaderContainer>
)
