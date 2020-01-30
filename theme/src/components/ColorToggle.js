import React from 'react'
import styled from '@emotion/styled'
import { useColorMode } from 'theme-ui'
import SwitchIcon from '../icons/SwitchIcon.js'

const Wrapper = styled.button`
  position: relative;
  line-height: 0;
  padding: 0;
  display: inline-block;
  cursor: pointer;
  transform: scaleX(${props => (props.flip ? '1' : '-1')});
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    top: 6px;
  }
  svg {
    fill: ${props => props.theme.colors.text};
    width: 1.75rem;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      width: 1.4rem;
    }
  }
`

const ColorToggle = props => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === 'default' ? 'dark' : 'default'
  return (
    <Wrapper
      onClick={() => setColorMode(nextColorMode)}
      flip={colorMode === 'dark'}
    >
      <SwitchIcon />
    </Wrapper>
  )
}

export default ColorToggle
