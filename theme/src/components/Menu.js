import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  transition: max-height 0.5s cubic-bezier(0.52, 0.16, 0.24, 1), border 0.3s;
  background: ${props => props.theme.colors.background};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: ${props => (props.open ? '100%' : '60px')};
  width: 100%;
  z-index: 99;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  border-width: ${props => (props.open ? '0' : '1px')};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    max-height: 60px;
    border-width: 1px;
  }
`
const Nav = styled.nav`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const List = styled.ul`
  position: relative;
  padding: 4rem 0 0 0;
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    pointer-events: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 0;
  }
`

const Item = styled(motion.li)`
  display: block;
  padding: 0.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0;
    line-height: 60px;
    display: inline-block;
    margin: 0 0 0 1rem;
    opacity: 1 !important;
    visibility: visible !important;
  }
  &:first-child {
    padding: 0;
    pointer-events: auto;
    line-height: 60px;
    opacity: 1 !important;
    visibility: visible !important;
    font-weight: ${props => props.theme.fonts.boldWeight};
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      position: relative;
      flex: 1;
      margin: 0;
    }
  }
  a {
    position: relative;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    transition: all 0.3s;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.text} !important;
    }
  }
`

const Toggle = styled.button`
  margin: 0;
  padding: 0;
  z-index: 999;
  transition: transform 0.3s;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1.5rem;
  width: 1.5rem;
  height: 60px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: none;
  }
  span {
    transition: all 0.3s;
    display: block;
    background: ${props => props.theme.colors.text};
    width: 100%;
    height: 2px;
  }
  span:first-child {
    transform: rotate(${props => (props.open ? '45deg' : '0')})
      translateY(${props => (props.open ? '0' : '.35rem')});
  }
  span:nth-child(2n) {
    transform: rotate(${props => (props.open ? '-45deg' : '0')})
      translateY(${props => (props.open ? '0' : '-.35rem')});
    position: relative;
    bottom: ${props => (props.open ? '2px' : '0')};
  }
`

const Menu = () => {
  const { menuLinks } = useSiteMetadata()

  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
    document.documentElement.classList.toggle('contain')
  }

  function close() {
    setIsOpen(false)
    document.documentElement.classList.remove('contain')
  }

  const itemVariants = {
    open: {
      opacity: 1,
      visibility: 'visible',
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
    closed: {
      opacity: 0,
      visibility: 'hidden',
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <Header open={isOpen}>
      <Nav>
        <Toggle open={isOpen} onClick={toggle} aria-label="Toggle Menu">
          <span />
          <span />
        </Toggle>
        <List open={isOpen}>
          {menuLinks.map(link => (
            <Item
              initial={false}
              variants={itemVariants}
              animate={isOpen ? 'open' : 'closed'}
              key={link.name}
            >
              <Link to={link.slug} onClick={close}>
                {link.name}
              </Link>
            </Item>
          ))}
        </List>
      </Nav>
    </Header>
  )
}

export default Menu
