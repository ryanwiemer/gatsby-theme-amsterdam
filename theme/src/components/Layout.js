import React, { useEffect, useContext } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import { globalStyles } from '../styles/globalStyles.js'
import Menu from './Menu'
import Footer from './Footer'
import Transition from './Transition'
import OptionsContext from './OptionsContext'

const Skip = styled.a`
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Root = styled.main`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fonts.normalWeight};
  padding: 60px 0 0 0;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fonts.heading};
  }
`

const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }

  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])
  const options = useContext(OptionsContext)

  return (
    <>
      <Skip href="#main" id="skip-navigation">
        Skip to content
      </Skip>
      {options.transitions ? (
        <>
          <Menu />
          <Transition {...props}>
            <Root className="siteRoot" id="main">
              {props.children}
              <Footer />
            </Root>
          </Transition>
        </>
      ) : (
        <>
          <Menu />
          <Root className="siteRoot" id="main">
            {props.children}
            <Footer />
          </Root>
        </>
      )}
      <Global styles={globalStyles} />
    </>
  )
}

export default Layout
