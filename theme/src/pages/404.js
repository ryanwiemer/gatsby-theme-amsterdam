import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Container from '../components/Container'
import SEO from '../components/SEO'

const Text = styled.div`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  h1 {
    font-weight: ${props => props.theme.fonts.boldWeight};
    line-height: 1.25;
    margin: 0 0 1rem;
    font-size: 1.75rem;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 2rem;
    }
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

const NotFoundPage = () => (
  <Container>
    <SEO title="Page Not Found" />
    <Text>
      <h1>Page Not Found :(</h1>
      <Link to="/">Return Home</Link>
    </Text>
  </Container>
)

export default NotFoundPage
