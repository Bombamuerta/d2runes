import React from 'react'
import styled from 'styled-components/macro'

import { runes } from '../../data/runes'

export const RunesListInner = styled.ul`
  color: #fff;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  background: #292929;
  padding: 1rem;
  max-height: calc(80vh - 300px);
  overflow: auto;
  border-radius: 5px;
  border: 2px solid #550000;
  margin-bottom: 10px;
  position: relative;

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

  @media (max-width: 650px) {
    padding: 0;
  }
`

export const RuneItem = styled.li`
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

export const RuneNumber = styled.span`
  min-width: 25px;
  text-align: right;
  margin-right: 5px;
  opacity: 0.8;

  @media (max-width: 650px) {
    min-width: 20px;
  }
`

export const RuneTitle = styled.span`
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

  @media (max-width: 650px) {
    min-width: 35px;
  }
`
export const RuneImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;

  @media (max-width: 650px) {
    margin: 0 5px 0 2px;
  }
`
export const LevelReq = styled.span``

export const RunesList = () => {
  return (
    <RunesListInner>
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
            <span>req: </span>
            <span>{item.req}</span>
          </LevelReq>
        </RuneItem>
      ))}
    </RunesListInner>
  )
}
