import React from 'react'
import styled from 'styled-components/macro'

const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid #550000;
  background: #222222;
  padding: 0 10px;
  color: #fff;

  @media (max-width: 650px) {
    width: 100%;
  }
`

const SearchWrapper = styled.div`
  position: relative;
`

const SearchResult = styled.div`
  width: 100%;
  position: absolute;
  top: 30px;
  left: 0;
  border: 1px solid #550000;
  border-top: 0;
  height: 100px;
  z-index: 10;
  background: #222222;
  /* disabled */
  display: none;

`
export const Search = () => {
  return (
    <SearchWrapper>
      <SearchInput
        placeholder='under construction...'
        onChange={() => alert('I SAID UNDER CONSTRUCTION!!!')}
      />
    <SearchResult />
    </SearchWrapper>
  )
}
