import React, { useState, Fragment } from 'react'
import styled from 'styled-components/macro'

import { runes } from '../../data/runes'

const RunesListInner = styled.ul`
  color: #fff;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  background: #292929;
  padding: 10px;
  max-height: calc(80vh - 60px);
  overflow: auto;
  border-radius: 5px;
  border: 2px solid #550000;
  margin-bottom: 10px;

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

const RuneItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 5px;
  }

  :hover {
    background: #3f3f3f;
  }
`

const RuneNumber = styled.span`
  min-width: 25px;
  text-align: right;
  margin-right: 5px;
  opacity: 0.8;
`

const RuneTitle = styled.span`
  text-transform: capitalize;
  font-weight: 700;
  min-width: 45px;
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
const RuneImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;
`
const LevelReq = styled.span``

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

const Legend = styled.div`
  position: absolute;
  background: #222222;
  right: 0;
  padding: 5px 10px;
  border: 1px solid #550000;
  border-radius: 5px;
  color: #fff;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  z-index: 10;
`

const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background: ${({ isNormal, isNightmare, isHell }) => {
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

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`

const LegendTitle = styled.div`
  margin-bottom: 5px;
`

export const RunesList = () => {
  const [toggleList, setToggleList] = useState(true)

  const handleToggle = () => {
    setToggleList(!toggleList)
  }

  return (
    <Fragment>
      <Box>
        <ToggleButton onClick={handleToggle}>
          {toggleList ? 'Show runes' : 'Hide runes'}
        </ToggleButton>
        <Legend isHidden={toggleList}>
          <LegendTitle>Countess drop: </LegendTitle>
          <LegendItem>
            <LegendColor isNormal />
            <span> - Normal</span>
          </LegendItem>
          <LegendItem>
            <LegendColor isNightmare />
            <span> - Nightmare</span>
          </LegendItem>
          <LegendItem>
            <LegendColor isHell />
            <span> - Hell</span>
          </LegendItem>
        </Legend>
      </Box>
      <RunesListInner isHidden={toggleList}>
        {runes.map((item) => (
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
        ))}
      </RunesListInner>
    </Fragment>
  )
}
