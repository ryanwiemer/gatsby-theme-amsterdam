import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;
  padding: ${props => (props.noPadding ? 0 : '2.5rem 1.5rem')};
  max-width: ${props =>
    props.fullWidth ? '100%' : props.theme.sizes.maxWidth};
`

const Container = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}

export default Container
