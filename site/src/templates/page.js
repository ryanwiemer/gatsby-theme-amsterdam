import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import MDX from 'gatsby-theme-amsterdam/src/components/MDX'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'

const Title = styled.h1`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`

const PageTemplate = ({ data }) => {
  return (
    <>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <Container>
        <Title>{data.mdx.frontmatter.title}</Title>
        <MDX content={data.mdx.body} />
      </Container>
    </>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
      }
    }
  }
`
