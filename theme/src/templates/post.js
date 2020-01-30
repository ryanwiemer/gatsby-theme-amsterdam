import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
import Hero from '../components/Hero'
import MDX from '../components/MDX'
import Preview from '../components/Preview'
import SEO from '../components/SEO'
import ProgressIndicator from '../components/ProgressIndicator'
import OptionsContext from '../components/OptionsContext'

const PostTemplate = ({ data, pageContext }) => {
  const post = data.mdx
  const next = pageContext.previous
  const previous = pageContext.next
  const options = useContext(OptionsContext)

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
        slug={pageContext.slug}
      />
      {options.progressIndicator && <ProgressIndicator />}
      <Container fullWidth>
        <Hero
          title={post.frontmatter.title}
          image={post.frontmatter.cover}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
          context={pageContext}
        />
        <MDX content={post.body} />
        <Preview previous={previous} next={next} context={pageContext} />
      </Container>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
