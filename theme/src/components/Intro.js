import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
  ${props =>
    props.capitalize &&
    css`
      text-transform: capitalize;
    `};
`

const Title = styled.h2`
  line-height: 1.25;
  text-align: left;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    max-width: 80%;
  }
`

const Intro = props => {
  return (
    <>
      {props.context.humanPageNumber === 1 && (
        <Wrapper {...props}>
          <Title>{props.text}</Title>
        </Wrapper>
      )}
    </>
  )
}

export default Intro
