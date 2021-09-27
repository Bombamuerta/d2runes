import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { runes } from '../../data/runes'

// import { RunesList } from '../RunesList'
import { RuneWords } from '../RuneWords'

import {
  RuneItem,
  RuneTitle,
  RuneNumber,
  LevelReq,
  RuneImg,
  RunesListInner,
} from '../RunesList'
// import { runes } from '../../data/runes'

// import { RuneItem } from '../RunesList'

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

// const SearchResult = styled.div`
//   width: 300px;
//   position: absolute;
//   top: 30px;
//   left: 0;
//   border: 1px solid #550000;
//   border-top: 0;
//   z-index: 10;
//   background: #222222;

//   display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
// `

export const Search = () => {
  const [runeName, setRuneName] = useState('')

  const handleSearch = (e) => {
    setRuneName(e.target.value)
  }

  return (
    <SearchWrapper>
      <SearchInput
        type='text'
        placeholder='search runes here'
        onChange={handleSearch}
        value={runeName}
        autoComplete='off'
      />
      <RunesListInner>
        {runes
          .filter((rune) => {
            if (runeName === '') {
              return rune
            } else if (rune.title.startsWith(runeName)) {
              return rune
            }
          })
          .map((item) => {
            return (
              <RuneItem key={item.id}>
                <RuneNumber>{item.id}.</RuneNumber>
                <RuneTitle
                  isNormal={item.difficulty === 'normal'}
                  isNightmare={item.difficulty === 'nightmare'}
                  isHell={item.difficulty === 'hell'}
                >
                  {item.title}
                </RuneTitle>
                <RuneImg src={`/images/${item.img}`} alt={item.title}></RuneImg>
                <LevelReq>
                  <span>req. level: </span>
                  <span>{item.req}</span>
                </LevelReq>
              </RuneItem>
            )
          })}
      </RunesListInner>
    </SearchWrapper>
  )
}
