import React from 'react'
import styled from '@emotion/styled'
import ImageIcon from '../icons/ImageIcon'

const Wrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.border};
  padding-bottom: 60%;
  padding-bottom: calc(1 / (${props => props.aspectRatio}) * 100%);
  position: relative;
  svg {
    width: 15%;
    max-width: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Placeholder = props => {
  return (
    <Wrapper {...props}>
      <ImageIcon />
    </Wrapper>
  )
}

export default Placeholder
