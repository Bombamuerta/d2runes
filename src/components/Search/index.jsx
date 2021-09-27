import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { runes } from '../../data/runes'

import {
  RuneItem,
  RuneTitle,
  RuneNumber,
  LevelReq,
  RuneImg,
  RunesListInner,
} from '../RunesList'

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

const Drop = styled.div`
  color: #fff;
  margin-left: 5px;
`
const DropLocation = styled.span`
  padding-left: 5px;
  text-transform: capitalize;
  color: ${({ isNormal, isNightmare, isHell }) => {
    switch (true) {
      case isNormal:
        return 'gold'
      case isNightmare:
        return '#de771c'
      case isHell:
        return '#e84816'
      default:
        return '#000'
    }
  }};
`
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
            } else if (rune.title.startsWith(runeName.toLowerCase())) {
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
                  <span>req: </span>
                  <span>{item.req} lv,</span>
                </LevelReq>
                <Drop>
                  drop:
                  <DropLocation
                    isNormal={item.difficulty === 'normal'}
                    isNightmare={item.difficulty === 'nightmare'}
                    isHell={item.difficulty === 'hell'}
                  >
                    {item.drop}
                  </DropLocation>
                </Drop>
              </RuneItem>
            )
          })}
      </RunesListInner>
    </SearchWrapper>
  )
}
