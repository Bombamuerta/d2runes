import React from 'react'
import styled from 'styled-components/macro'

import { Header } from '../Header'
import { Main } from '../Main'


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AppWrapper = () => (
  <Wrapper>
    <Header text='Diablo 2 runes'/>
    <Main />
  </Wrapper>
)
