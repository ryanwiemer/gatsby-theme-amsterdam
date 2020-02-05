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
  let ogImage

  try {
    ogImage = data.page.cover.childImageSharp.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO
        title={data.page.title}
        description={data.page.description}
        image={ogImage}
      />
      <Container>
        <Title>{data.page.title}</Title>
        <MDX content={data.page.body} />
      </Container>
    </>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    page(slug: { eq: $slug }) {
      body
      title
      description
      slug
      cover {
        childImageSharp {
          ogimg: resize(width: 1000) {
            src
          }
        }
      }
    }
  }
`
