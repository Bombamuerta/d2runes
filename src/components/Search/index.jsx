import React, { Fragment, useState } from 'react'
// import { Children } from 'react'
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

// import { RuneCard } from '../RuneCard'

// TODO сделать обертку для инпута и позиционировать иконку от нее
const LensIcon = styled.i`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 8px;
  right: 10px;
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
    console.log(item)
    setRuneTitle(item.title)
    setWeapons(item.stats.weapons)
    setArmor(item.stats.armor_helms)
    setShields(item.stats.shields)
    setRecipe(item.recipe)
  }

  const [runeTitle, setRuneTitle] = useState('')
  const [weapons, setWeapons] = useState('')
  const [armor, setArmor] = useState('')
  const [shields, setShields] = useState('')
  const [recipe, setRecipe] = useState('')
  // TODO эта пусть чекает руну для выбора в список.
  // пусть пока лежит
  // const testFoo = () => {
  //   console.log('bdsbdh')
  // }

  const closeCard = () => {
    setShowCard(false)
    console.log('click')
  }

  return (
    <Fragment>
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
            .filter((rune) => {  // eslint-disable-line
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
              runeTitle={runeTitle}
              weapons={weapons}
              armor={armor}
              shields={shields}
              recipe={recipe}
            />
          )}
        </RunesListInner>
      </SearchWrapper>
    </Fragment>
  )
}
