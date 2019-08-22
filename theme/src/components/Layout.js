import React, { useEffect, useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
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
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Skip href="#main" id="skip-navigation">
        Skip to content
      </Skip>

      <ThemeProvider theme={theme}>
        <>
          {options.transitions ? (
            <>
              <Menu />
              <Transition {...props}>
                <div className="siteRoot">
                  {props.children}
                  <Footer />
                </div>
              </Transition>
            </>
          ) : (
            <>
              <Menu />
              <main className="siteRoot" id="main">
                {props.children}
                <Footer />
              </main>
            </>
          )}
        </>
      </ThemeProvider>
      <GlobalStyle />
    </>
  )
}

export default Layout
