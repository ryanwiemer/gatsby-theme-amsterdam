import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Preview from '../components/Preview'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.previous
  const previous = pageContext.next

  let ogImage
  try {
    ogImage = post.frontmatter.cover.childImageSharp.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={ogImage}
      />
      <Container fullWidth>
        <Hero
          title={post.frontmatter.title}
          image={post.frontmatter.cover}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
          context={pageContext}
        />
        <Content html={post.html} />
        <Preview previous={previous} next={next} context={pageContext} />
      </Container>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
            ogimg: resize(width: 1000) {
              src
            }
          }
        }
      }
    }
  }
`
