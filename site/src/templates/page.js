import React from 'react'
import { graphql } from 'gatsby'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Content from 'gatsby-theme-amsterdam/src/components/Content'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'

const PageTemplate = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
      />
      <Container>
        <Content html={data.markdownRemark.html} />
      </Container>
    </>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        description
      }
    }
  }
`
