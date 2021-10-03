import React, { useState, Fragment } from 'react'
import styled from 'styled-components/macro'

import { ToggleButton } from '../ToggleButton'

const LegendWrapper = styled.div`
  position: relative;
  background: #222222;
  padding: 5px 10px;
  border: 1px solid #550000;
  border-radius: 5px;
  color: #fff;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  flex-wrap: wrap;
  margin-bottom: 1rem;
  width: 300px;

  @media (max-width: 650px) {
    width: 150px;
  }
`

// const CloseLegend = styled.div`
//   /* position: absolute; */
//   /* right: 0.5rem; */
//   /* top: 0.5rem; */
//   width: 18px;
//   height: 18px;
//   border-radius: 50%;
//   border: 1px solid red;
//   background: url('/images/icon_close.svg') no-repeat center;
// `

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
  width: 100%;
`

export const Legend = () => {
  const [hidden, setHidden] = useState(true)

  const toggleLegend = () => {
    setHidden(!hidden)
  }

  return (
    <Fragment>
      <ToggleButton
        text={hidden ? 'Show legend' : 'Hide legend'}
        toggleLegend={toggleLegend}
      ></ToggleButton>
      <LegendWrapper isHidden={hidden}>
        <LegendTitle>Legend: </LegendTitle>
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
    </Fragment>
  )
}
