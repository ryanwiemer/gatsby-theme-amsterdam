import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/Container'
import Content from '../components/Content'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Container>
    <SEO title="Page Not Found" />
    <Content>
      <h1>Page Not Found :(</h1>
      <p>
        <Link to="/">Return Home</Link>
      </p>
    </Content>
  </Container>
)

export default NotFoundPage
