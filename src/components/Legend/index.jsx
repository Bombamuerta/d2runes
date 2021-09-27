import React from 'react'
import styled from 'styled-components/macro'

const LegendWrapper = styled.div`
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

export const Legend = ({isHidden, toggleList}) => {
  return (
    <LegendWrapper isHidden={isHidden}>
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
    </LegendWrapper>
  )
}
