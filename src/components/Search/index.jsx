import React, { useState } from 'react'
import styled from 'styled-components/macro'

import { runes } from '../../data/runes'

import { RuneCard } from '../RuneCard'

import {
  RuneItem,
  RuneTitle,
  RuneNumber,
  LevelReq,
  RuneImg,
  RunesListInner,
} from '../RunesList'

const LensIcon = styled.i`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 8px;
  right: 15px;
  background: url('/images/icon_lens.svg') center no-repeat;
  background-size: contain;
`

const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: 1px solid #550000;
  background: #222222;
  padding: 0 10px;
  color: #fff;

  :focus {
    border-color: red;
    caret-color: red;
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
    setShowCard(false)
  }

  const [showCard, setShowCard] = useState(false)

  const toggleCard = (item) => {
    setShowCard(true)
    setRuneInfo({
      runeTitle: item.title,
      weapons: item.stats.weapons,
      armor: item.stats.armor_helms,
      shields: item.stats.shields,
      recipe: item.recipe,
    })
  }

  const [runeInfo, setRuneInfo] = useState({
    runeTitle: '',
    weapons: '',
    armor: '',
    shields: '',
    recipe: '',
  })

  const closeCard = () => {
    setShowCard(false)
  }

  return (
      <SearchWrapper>
        <LensIcon />
        <SearchInput
          type='text'
          placeholder='Search runes here'
          onChange={handleSearch}
          value={runeName}
          autoComplete='off'
        />
        {/* вынести в отдельный компонент если получится */}
        <RunesListInner>
          {runes
            .filter((rune) => { // eslint-disable-line
              if (runeName === '') {
                return rune
              } else if (rune.title.startsWith(runeName.toLowerCase())) {
                return rune
              }
            })
            .map((item) => {
              return (
                <RuneItem key={item.id} onClick={() => toggleCard(item)}>
                  <RuneNumber>{item.id}.</RuneNumber>
                  <RuneTitle
                    isNormal={item.difficulty === 'normal'}
                    isNightmare={item.difficulty === 'nightmare'}
                    isHell={item.difficulty === 'hell'}
                  >
                    {item.title}
                  </RuneTitle>
                  <RuneImg
                    src={`/images/${item.img}`}
                    alt={item.title}
                  ></RuneImg>
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
          {showCard && (
            <RuneCard
              closeCard={closeCard}
              runeInfo={runeInfo}
            />
          )}
        </RunesListInner>
      </SearchWrapper>
  )
}
