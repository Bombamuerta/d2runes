import React, { useState, Fragment } from 'react'
import styled from 'styled-components/macro'

// import { runes } from '../../data/runes'

const RuneWordsInner = styled.ul`
  color: #fff;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  background: #292929;
  padding: 10px;
  max-height: calc(80vh - 45px);
  overflow: auto;
  border-radius: 5px;
  border: 1px solid #550000;

  ::-webkit-scrollbar {
    width: 7px;
    background: #3f3f3f;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #720202;
  }
`

const Box = styled.div`
  display: flex;
  margin-bottom: 10px;
  position: relative;
`

const ToggleButton = styled.button`
  min-width: 150px;
  padding: 5px 10px;
  height: 30px;
  border: 1px solid #550000;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  margin-right: 10px;
  background: #222222;
`

export const RuneWords = () => {
  const [toggleList, setToggleList] = useState(true)

  const handleToggle = () => {
    setToggleList(!toggleList)
  }

  return (
    <Fragment>
      <Box>
        <ToggleButton onClick={handleToggle}>
          {toggleList ? 'Show runewords' : 'Hide runewords'}
        </ToggleButton>
      </Box>

      <RuneWordsInner isHidden={toggleList}>under construction...</RuneWordsInner>
    </Fragment>
  )
}
