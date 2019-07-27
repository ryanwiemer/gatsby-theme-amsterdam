import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.section`
  flex-grow: 1;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding: 2.5rem 1.5rem;
  ${props =>
    props.fullWidth &&
    css`
      max-width: 100%;
    `}
  ${props =>
    props.noPadding &&
    css`
      padding: 0;
    `}
`

const Container = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}

export default Container
