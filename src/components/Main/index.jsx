import React from 'react'
import styled from 'styled-components/macro'

// import { RuneWords } from '../RuneWords'
import { Search } from '../Search'
import { Legend } from '../Legend'
// import { RuneCard } from '../RuneCard'

const MainContainer = styled.div`
  width: 100%;
  max-width: 95vw;
  padding: 1.5rem;
  position: relative;

  @media (max-width: 650px) {
    padding: 1rem 0.5rem;
  }
`

export const Main = () => {
  return (
    <MainContainer>
      <Legend />
      <Search />
    </MainContainer>
  )
}
