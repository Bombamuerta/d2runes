import React from 'react'
import styled from 'styled-components/macro'

const ToggleButtonInner = styled.button`
  min-width: 150px;
  padding: 5px 10px;
  height: 30px;
  border: 1px solid #550000;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 1rem;
  background: #222222;
`

export const ToggleButton = ({text, toggleLegend}) => {
  return (
    <ToggleButtonInner onClick={toggleLegend}>
      {text}
    </ToggleButtonInner>
  )
}
