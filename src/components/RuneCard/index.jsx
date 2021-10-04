import React from 'react'
import styled from 'styled-components/macro'

const RuneCardInner = styled.div`
  width: 350px;
  background-color: #222;
  color: white;
  position: fixed;
  top: 65px;
  right: 5rem;
  border: 2px solid #550000;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
  z-index: 10;

  @media (max-width: 650px) {
    bottom: 10px;
    top: auto;
    width: 92%;
    left: 50%;
    transform: translateX(-50%);
  }
`
const StatsBox = styled.div`
  display: flex;
  flex-direction: column;

  span {
    :nth-child(6) {
      padding-bottom: 5px;
      border-bottom: 1px solid #9a1111;
    }
  }
`

const Title = styled.span`
  font-weight: 700;
  line-height: 2rem;
`

const CardInner = styled.div`
  position: relative;
`

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: url('/images/icon_close.svg') no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
`

const RuneTitle = styled.span`
  text-transform: uppercase;
  font-style: italic;
  font-weight: 700;
  line-height: 2rem;
  font-size: 1.5rem;
`

const InfoText = styled.span``

export const RuneCard = ({ closeCard, runeInfo }) => {
  return (
    <RuneCardInner>
      <CardInner>
        <RuneTitle>{runeInfo.runeTitle}</RuneTitle>
        <CloseButton onClick={closeCard} />
        <StatsBox>
          <Title>Weapons</Title>
          <InfoText>{runeInfo.weapons}</InfoText>
          <Title>Armors/Helms</Title>
          <InfoText>{runeInfo.armor}</InfoText>
          <Title>Shields</Title>
          <InfoText>{runeInfo.shields}</InfoText>
          <Title>Cube</Title>
          <InfoText>{runeInfo.recipe}</InfoText>
        </StatsBox>
      </CardInner>
    </RuneCardInner>
  )
}
